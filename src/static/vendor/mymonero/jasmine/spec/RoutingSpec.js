describe("Routing", function() {
    var route,
        location,
        rootScope;

    beforeEach(module("thinWallet"));
    beforeEach(module("thinWallet.templates"));
    beforeEach(inject(function($route, $location, $rootScope) {
        expect($route.current).toBeUndefined();
        route = $route;
        location = $location;
        rootScope = $rootScope;
    }));

    it("should redirect authenticated pages to home", function() {
        expect(route.current).toBeUndefined();

        location.path("/overview");
        rootScope.$digest();
        expect(location.path()).toEqual("/");

        location.path("/transactions");
        rootScope.$digest();
        expect(location.path()).toEqual("/");

        location.path("/send");
        rootScope.$digest();
        expect(location.path()).toEqual("/");

        location.path("/receive");
        rootScope.$digest();
        expect(location.path()).toEqual("/");
    });

    it("redirects to overview page if logged in", inject(function(AccountService) {
        // Fake a logged in state for route checking
        spyOn(AccountService, 'loggedIn').and.callFake(function() {
            return true;
        });

        location.path("/");
        rootScope.$digest();
        expect(location.path()).toEqual("/overview");

        location.path("/create-your-account");
        rootScope.$digest();
        expect(location.path()).toEqual("/overview");
    }));
});