describe("Account Service", function() {
    var accountService,
        $rootScope,
        $httpBackend,
        loginRequestHandler;

    var address = "47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM";
    var view_key = "580524a80e88ac7c2d7af19199256b228499569e5b2db6a161f95b4fa411ef0d";
    var spend_key = "c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900";
    var seed = "c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900";

    beforeEach(module("thinWallet"));
    beforeEach(module("thinWallet.templates"));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get("$httpBackend");
        $rootScope = $injector.get("$rootScope");

        loginRequestHandler = $httpBackend.when("POST", /^.*\/login$/)
            .respond(function(method, url, data) {
                expect(JSON.parse(data)).toEqual({
                    address: address,
                    view_key: view_key,
                    create_account: true
                });
                return [200, {new_address: false}];
            });

        inject(function(AccountService) {
            accountService = AccountService;
        });
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be defined", function() {
        expect(accountService).toBeDefined();
    });

    it("should call api /login", function(done) {
        $httpBackend.expectPOST("http://127.0.0.1:8080/login");
        accountService.login(address, view_key, spend_key, seed).then(
            function(data) {
                expect(data).toEqual({new_address: false});
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should set logging_in status", function(done) {
        expect(accountService.loggingIn()).toEqual(false);
        accountService.login(address, view_key, spend_key, seed).then(
            function() {
                expect(accountService.loggingIn()).toEqual(false);
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        expect(accountService.loggingIn()).toEqual(true);
        $httpBackend.flush();
    });

    it("should set account_imported to true when address wasn't generated and it doesn't exist on the server", function(done) {
        loginRequestHandler.respond(function(method, url, data) {
            return [200, {new_address: true}];
        });
        accountService.login(address, view_key, spend_key, seed, false).then(
            function() {
                expect(accountService.wasAccountImported()).toEqual(true);
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should set account_imported to false when address has been generated", function(done) {
        loginRequestHandler.respond(function(method, url, data) {
            return [200, {new_address: true}];
        });
        accountService.login(address, view_key, spend_key, seed, true).then(
            function() {
                expect(accountService.wasAccountImported()).toEqual(false);
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should set account_imported to false when address wasn't generated and it exists on the server", function(done) {
        loginRequestHandler.respond(function(method, url, data) {
            return [200, {new_address: false}];
        });
        accountService.login(address, view_key, spend_key, seed, false).then(
            function() {
                expect(accountService.wasAccountImported()).toEqual(false);
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should set create_account api param", function(done) {
        loginRequestHandler.respond(function(method, url, data) {
            expect(JSON.parse(data)).toEqual({
                address: address,
                view_key: view_key,
                create_account: true
            });
            return [200, {new_address: false}];
        });
        accountService.login(address, view_key, spend_key, seed).then(
            function() {
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should login without seed", function(done) {
        accountService.login(address, view_key, spend_key).then(
            function() {
                expect(accountService.getSeed()).toEqual('');
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should broadcast auth status changed event on login", function(done) {
        spyOn($rootScope, "$broadcast").and.callThrough();
        accountService.login(address, view_key, spend_key, seed).then(
            function() {
                expect($rootScope.$broadcast).toHaveBeenCalledWith("auth-status-changed");
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should reject invalid address", function(done) {
        accountService.login("47c1KgmFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM", view_key, spend_key, seed).then(
            function() {
                fail("login should not succeed");
                done();
            },
            function(reason) {
                expect(reason).toEqual("invalid address");
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should reject invalid view key", function(done) {
        accountService.login(address, "580524a80e88ac7c2d7af19199256b228499569e5b2db6a161f95b4fa411ef1d", spend_key, seed).then(
            function() {
                fail("login should not succeed");
                done();
            },
            function(reason) {
                expect(reason).toEqual("invalid view key");
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should reject invalid spend key", function(done) {
        accountService.login(address, view_key, "c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354920", seed).then(
            function() {
                fail("login should not succeed");
                done();
            },
            function(reason) {
                expect(reason).toEqual("invalid spend key");
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should reject invalid seed", function(done) {
        accountService.login(address, view_key, spend_key, "c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354910").then(
            function() {
                fail("login should not succeed");
                done();
            },
            function(reason) {
                expect(reason).toEqual("invalid seed");
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should respond with server error", function(done) {
        loginRequestHandler.respond(500, {"Error": "internal server error"});
        accountService.login(address, view_key, spend_key, seed).then(
            function() {
                fail("login should not succeed");
                done();
            },
            function(reason) {
                expect(reason).toEqual("internal server error");
                done();
            }
        );
        $httpBackend.flush();
    });

    it("should set logged_in", function(done) {
        expect(accountService.loggedIn()).toEqual(false);
        accountService.login(address, view_key, spend_key, seed).then(
            function() {
                expect(accountService.loggedIn()).toEqual(true);
                done();
            },
            function(reason) {
                fail(reason);
                done();
            }
        );
        $httpBackend.flush();
    });

    describe("when logged in", function() {
        beforeEach(function(done) {
            accountService.login(address, view_key, spend_key, seed).then(
                function() {
                    done();
                },
                function(reason) {
                    fail(reason);
                    done();
                }
            );
            $httpBackend.flush();
        });

        it("should broadcast auth status change on logout", function() {
            spyOn($rootScope, "$broadcast");
            accountService.logout();
            expect($rootScope.$broadcast).toHaveBeenCalledWith("auth-status-changed");
        });

        it("should generate correct mnemonic", function() {
            expect(accountService.getMnemonic()).toEqual("shocking custom brunt foggy roomy iguana cowl sorry federal situated hospital touchy oilfield king injury tacit hashing yeti sewage jittery budget pruned linen lion brunt");
        });

        it("should use provided mnemonic language", function() {
            expect(accountService.getMnemonic("electrum")).toEqual("beam finger grow somehow group quick question mostly loud loser nightmare chin truck written box sentence spin puff advice knock listen ship closet creek");
        });

        it("should provide public and secret keys", function() {
            expect(accountService.getViewKey()).toEqual(view_key);
            expect(accountService.getSpendKey()).toEqual(spend_key);
            expect(accountService.getSecretKeys()).toEqual({
                view: view_key,
                spend: spend_key
            });
            expect(accountService.getAddress()).toEqual(address);
            expect(accountService.getAddressAndViewKey()).toEqual({
                address: address,
                view_key: view_key
            });
        });

        it("should provide account seed", function() {
            expect(accountService.getSeed()).toEqual(seed);
        });

        it("should provide public keys", function() {
            expect(accountService.getPublicKeys()).toEqual({
                spend: "9dd41eb24bcca4db975a8c239b34c42318c51612b6b53def92670a2930156dfb",
                view: "68a14f37dda670bf7453df6fcb1b49002415075160670e21742bbe0a4b54aa5d"
            });
        });
    });
});