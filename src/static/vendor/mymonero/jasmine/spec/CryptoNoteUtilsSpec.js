describe("CryptoNote Utility library", function() {
    describe("money formatting", function() {
        it("should accept strings", function() {
            expect(cnUtil.formatMoney("1234000000000")).toEqual("1.234");
            expect(cnUtil.formatMoneySymbol("1234000000000")).toEqual("1.234 XMR");
            expect(cnUtil.formatMoneyFull("1234000000000")).toEqual("1.234000000000");
            expect(cnUtil.formatMoneyFullSymbol("1234000000000")).toEqual("1.234000000000 XMR");
        });
        it("should accept integers", function() {
            expect(cnUtil.formatMoney(56780000)).toEqual("0.00005678");
            expect(cnUtil.formatMoneySymbol(56780000)).toEqual("0.00005678 XMR");
            expect(cnUtil.formatMoneyFull(56780000)).toEqual("0.000056780000");
            expect(cnUtil.formatMoneyFullSymbol(56780000)).toEqual("0.000056780000 XMR");
        });
        it("should accept bigints", function() {
            expect(cnUtil.formatMoney(new JSBigInt("90120000000"))).toEqual("0.09012");
            expect(cnUtil.formatMoneySymbol(new JSBigInt("90120000000"))).toEqual("0.09012 XMR");
            expect(cnUtil.formatMoneyFull(new JSBigInt("90120000000"))).toEqual("0.090120000000");
            expect(cnUtil.formatMoneyFullSymbol(new JSBigInt("90120000000"))).toEqual("0.090120000000 XMR");
        });
        it("formats to required decimal places", function() {
            expect(cnUtil.formatMoney("1234000000000")).toEqual("1.234");
            expect(cnUtil.formatMoney("56780000")).toEqual("0.00005678");
            expect(cnUtil.formatMoney("3000000000000")).toEqual("3");
            expect(cnUtil.formatMoney("0")).toEqual("0");
        });
        it("formats to required decimal places with currency symbol", function() {
            expect(cnUtil.formatMoneySymbol("1234000000000")).toEqual("1.234 XMR");
            expect(cnUtil.formatMoneySymbol("56780000")).toEqual("0.00005678 XMR");
            expect(cnUtil.formatMoneySymbol("3000000000000")).toEqual("3 XMR");
            expect(cnUtil.formatMoneySymbol("0")).toEqual("0 XMR");
        });
        it("formats to all decimal places", function() {
            expect(cnUtil.formatMoneyFull("1234000000000")).toEqual("1.234000000000");
            expect(cnUtil.formatMoneyFull("56780000")).toEqual("0.000056780000");
            expect(cnUtil.formatMoneyFull("3000000000000")).toEqual("3.000000000000");
            expect(cnUtil.formatMoneyFull("0")).toEqual("0.000000000000");
        });
        it("formats to all decimal places with currency symbol", function() {
            expect(cnUtil.formatMoneyFullSymbol("1234000000000")).toEqual("1.234000000000 XMR");
            expect(cnUtil.formatMoneyFullSymbol("56780000")).toEqual("0.000056780000 XMR");
            expect(cnUtil.formatMoneyFullSymbol("3000000000000")).toEqual("3.000000000000 XMR");
            expect(cnUtil.formatMoneyFullSymbol("0")).toEqual("0.000000000000 XMR");
        });
    });
    describe("address generation", function() {
        var address;
        beforeAll(function() {
            address = cnUtil.create_address("c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900");
        });

        it("generates secret spend key", function() {
            expect(address.spend.sec).toEqual("c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900");
        });
        it("generates secret view key", function() {
            expect(address.view.sec).toEqual("580524a80e88ac7c2d7af19199256b228499569e5b2db6a161f95b4fa411ef0d");
        });
        it("generates public spend key", function() {
            expect(address.spend.pub).toEqual("9dd41eb24bcca4db975a8c239b34c42318c51612b6b53def92670a2930156dfb");
        });
        it("generates public view key", function() {
            expect(address.view.pub).toEqual("68a14f37dda670bf7453df6fcb1b49002415075160670e21742bbe0a4b54aa5d");
        });
        it("generates public address", function() {
            expect(address.public_addr).toEqual("47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM");
        });
    });
    describe("address decoding", function() {
        var decoded;
        beforeAll(function() {
            decoded = cnUtil.decode_address("47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM");
        });

        it("decodes spend key", function() {
            expect(decoded.spend).toEqual("9dd41eb24bcca4db975a8c239b34c42318c51612b6b53def92670a2930156dfb");
        });
        it("decodes view key", function() {
            expect(decoded.view).toEqual("68a14f37dda670bf7453df6fcb1b49002415075160670e21742bbe0a4b54aa5d");
        });
    });
    describe("crypto functions", function() {
        it("derives key derivation", function() {
            var key_derivation = cnUtil.generate_key_derivation("6c9f666235d33ac97b7c7b962dd3bdf070958257e1f6fc7537a7d246458d48be", "5b0018036eeba8e3aadf8b4cb1ca6149498875f6fbeaa392834109a35f6df50f");
            expect(key_derivation).toEqual("7a4c13a037d4bd2a7dd99a8c24669e9e04ca4e8a90e5b6703e88e87ad51c1849");
        });
        it("derives public key", function() {
            var public_key = cnUtil.derive_public_key("7a4c13a037d4bd2a7dd99a8c24669e9e04ca4e8a90e5b6703e88e87ad51c1849", 1, "12d249119a73f24b40ac18a8ae595aa10f61b6d43d50f361fba67b24a031e590");
            expect(public_key).toEqual("cc89e3099df28ea7c95efeeee4ed3db7581b5896485d8c9abc35c2d31644302f");
        });
        it("derives secret key", function() {
            var secret_key = cnUtil.derive_secret_key("7a4c13a037d4bd2a7dd99a8c24669e9e04ca4e8a90e5b6703e88e87ad51c1849", 1, "3d9615915ad645d8572d4944548cfc878f2a1fba8870617b109bd4ffcd9e8300");
            expect(secret_key).toEqual("b310412cdc21beadb654f4c31d47ddbae2d22f82a9570d30db55b2e419f82005");
        });
        it("converts derivation to scalar", function() {
            var scalar = cnUtil.derivation_to_scalar("7a4c13a037d4bd2a7dd99a8c24669e9e04ca4e8a90e5b6703e88e87ad51c1849", 1);
            expect(scalar).toEqual("767a2b9b814b78d55e27ab7fc9bae03253a810c820e7abb4cabadde44b599d04");
        });
        it("converts hash to scalar", function() {
            var scalar = cnUtil.hash_to_scalar("bc3fd5a4d4904795c14b076d37927b7c56fd5612bacd00a0ab2775c0ecbb13c2eaf8e01f1b8f4e9960a1463d75bbe16d12a69f73c6df29fbde162e811445d6a959705b9bac69c28ab198861e5c80493dd546d5c2ed871b17004f79300d521278");
            expect(scalar).toEqual("e00842f3796b7b9d938477afd037d19099c4c2749bf01d0aa10e129c8f5e0004");
        });
        it("derives key image", function() {
            var key_image = cnUtil.generate_key_image_2("cc89e3099df28ea7c95efeeee4ed3db7581b5896485d8c9abc35c2d31644302f", "b310412cdc21beadb654f4c31d47ddbae2d22f82a9570d30db55b2e419f82005");
            expect(key_image).toEqual("600aa804c862cf15f1410111d2c9223bfbd5f8045d7d55cd2881ae5ee8a80c1b");
        });
    });
    describe("key image generation", function() {
        var key_image_result;
        beforeEach(function() {
            key_image_result = cnUtil.generate_key_image("c2195a4a8e124c36eccf11eab5881d8e619aeab23bd0cd61cfd124e4ec32bd51", "5b0018036eeba8e3aadf8b4cb1ca6149498875f6fbeaa392834109a35f6df50f", "12d249119a73f24b40ac18a8ae595aa10f61b6d43d50f361fba67b24a031e590", "3d9615915ad645d8572d4944548cfc878f2a1fba8870617b109bd4ffcd9e8300", 2);
        });

        it("derives key image", function() {
            expect(key_image_result.key_image).toEqual("bf072297e9ed44004a02b48b46adb3a4c7dc8970a8141b5887ee7f644ea8c2fa");
        });
        it("derives ephemeral key", function() {
            expect(key_image_result.ephemeral_pub).toEqual("b2ecddc859f602643fd12c4ba6508eabf3b9f2cdd4ef4e7c277c181deb6cf3fb");
        });
    });
    describe("transaction handling", function() {
        var tx = {
            "unlock_time": 0,
            "version": 1,
            "extra": "01c2195a4a8e124c36eccf11eab5881d8e619aeab23bd0cd61cfd124e4ec32bd51",
            "vin": [{
                "type": "input_to_key",
                "amount": "5000000000",
                "k_image": "600aa804c862cf15f1410111d2c9223bfbd5f8045d7d55cd2881ae5ee8a80c1b",
                "key_offsets": ["205113"]
            }, {
                "type": "input_to_key",
                "amount": "12000000000",
                "k_image": "38be3079d6abde1e4d59479fa69cad5b0aca755c616d561e9fa2fa0c8b06245f",
                "key_offsets": ["0"]
            }],
            "vout": [{
                "amount": "5000000000",
                "target": {
                    "type": "txout_to_key",
                    "key": "c779c1f2cbd716a77f5cb9ce6248e8415b15d329a9566d03c6db414627a3e435"
                }
            }, {
                "amount": "1000000000",
                "target": {
                    "type": "txout_to_key",
                    "key": "fd2dc98529873066044abacbf229a36bf842aa402e4e9f5842c7343d401bbe8c"
                }
            }, {
                "amount": "6000000000",
                "target": {
                    "type": "txout_to_key",
                    "key": "b2ecddc859f602643fd12c4ba6508eabf3b9f2cdd4ef4e7c277c181deb6cf3fb"
                }
            }],
            "signatures": [["1ce9189f68061d37b91fa61f2242dc0060f4c112388c028bdaf937abe7e4c50eef20ce114d31e63ac1d5dd1f7721446a5896197847ef9fb82b0900e6f4cb8c06"], ["cd59ba5528f97590f78f9bba109c6a5779347a7a3637fc1e666e94149c1295074ff0f475c99b119c4a9a9a8beb991092425a7b4861b067bf29a432e629fffb09"]]
        };
        it("serializes transaction", function() {
            expect(cnUtil.serialize_tx(tx)).toEqual("0100020280e497d01201b9c20c600aa804c862cf15f1410111d2c9223bfbd5f8045d7d55cd2881ae5ee8a80c1b0280f085da2c010038be3079d6abde1e4d59479fa69cad5b0aca755c616d561e9fa2fa0c8b06245f0380e497d01202c779c1f2cbd716a77f5cb9ce6248e8415b15d329a9566d03c6db414627a3e4358094ebdc0302fd2dc98529873066044abacbf229a36bf842aa402e4e9f5842c7343d401bbe8c80f882ad1602b2ecddc859f602643fd12c4ba6508eabf3b9f2cdd4ef4e7c277c181deb6cf3fb2101c2195a4a8e124c36eccf11eab5881d8e619aeab23bd0cd61cfd124e4ec32bd511ce9189f68061d37b91fa61f2242dc0060f4c112388c028bdaf937abe7e4c50eef20ce114d31e63ac1d5dd1f7721446a5896197847ef9fb82b0900e6f4cb8c06cd59ba5528f97590f78f9bba109c6a5779347a7a3637fc1e666e94149c1295074ff0f475c99b119c4a9a9a8beb991092425a7b4861b067bf29a432e629fffb09");
        });
        it("generates transaction prefix hash", function() {
            expect(cnUtil.get_tx_prefix_hash(tx)).toEqual("eb87ce161b95621c712a67533613d4f2aa883280c706048b1356627f3ee5e726");
        });
        it("generates transaction hash", function() {
            expect(cnUtil.get_tx_hash(tx)).toEqual("248c6ea4690433556e7873866d56d4598876bb39383360d2c72bd4be9212fff2");
        });
        it("generates transaction hash from serialized transaction", function() {
            var tx_serialized = "0100020280e497d01201b9c20c600aa804c862cf15f1410111d2c9223bfbd5f8045d7d55cd2881ae5ee8a80c1b0280f085da2c010038be3079d6abde1e4d59479fa69cad5b0aca755c616d561e9fa2fa0c8b06245f0380e497d01202c779c1f2cbd716a77f5cb9ce6248e8415b15d329a9566d03c6db414627a3e4358094ebdc0302fd2dc98529873066044abacbf229a36bf842aa402e4e9f5842c7343d401bbe8c80f882ad1602b2ecddc859f602643fd12c4ba6508eabf3b9f2cdd4ef4e7c277c181deb6cf3fb2101c2195a4a8e124c36eccf11eab5881d8e619aeab23bd0cd61cfd124e4ec32bd511ce9189f68061d37b91fa61f2242dc0060f4c112388c028bdaf937abe7e4c50eef20ce114d31e63ac1d5dd1f7721446a5896197847ef9fb82b0900e6f4cb8c06cd59ba5528f97590f78f9bba109c6a5779347a7a3637fc1e666e94149c1295074ff0f475c99b119c4a9a9a8beb991092425a7b4861b067bf29a432e629fffb09";
            expect(cnUtil.get_tx_hash(tx_serialized)).toEqual("248c6ea4690433556e7873866d56d4598876bb39383360d2c72bd4be9212fff2");
        });
    });
    describe("address prefix generation", function() {
        it("generates address prefix", function() {
            var addr_prefix = cnUtil.create_addr_prefix("c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900");
            expect(addr_prefix).toEqual("47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjSc");
        });
    });
});