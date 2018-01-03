describe("Mnemonic library", function() {
    describe("electrum format", function() {
        it("should encode mnemonics", function() {
            expect(mn_encode("c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900", "electrum")).toEqual("beam finger grow somehow group quick question mostly loud loser nightmare chin truck written box sentence spin puff advice knock listen ship closet creek");
            expect(mn_encode("c7e152f406cef0acb0021f7cbe51db7a", "electrum")).toEqual("beam finger grow somehow group quick question mostly loud loser nightmare chin");
        });
        it("should decode mnemonics", function() {
            expect(mn_decode("beam finger grow somehow group quick question mostly loud loser nightmare chin truck written box sentence spin puff advice knock listen ship closet creek", "electrum")).toEqual("c7e152f406cef0acb0021f7cbe51db7a245573f3b61c09a0095707af6d354900");
            expect(mn_decode("beam finger grow somehow group quick question mostly loud loser nightmare chin", "electrum")).toEqual("c7e152f406cef0acb0021f7cbe51db7a");
        });
        it("should detect invalid mnemonics", function() {
            expect(function() {
                mn_decode("bea finger grow somehow group quick question mostly loud loser nightmare chin truck written box sentence spin puff advice knock listen ship closet creek", "electrum");
            }).toThrow("invalid word in mnemonic");
        });
    });

    describe("english format", function() {
        it("should encode mnemonics", function() {
            expect(mn_encode("11fcd1dae09c57999d3714f8f147a3032a2efe958ffa7641d33312a65401f90a", "english")).toEqual("fazed theatrics ravine corrode dwindling sword ivory pivot owed gang imagine inundate frying border recipe gypsy situated algebra seeded object elbow august recipe sample owed");
            expect(mn_encode("bb802fc2081151211a640aa72f6515d3a4fe979cc8c26a8d8737ac1ff9195909", "english")).toEqual("espionage lordship error hull stick violin adapt zones pests money adept tattoo gown android pimple tasked dusted sighting alarms aerial calamity aptitude hijack injury pimple");
            expect(mn_encode("b585485e954430d5e2bb5fe55c76ca704a5c855c0c932e2877649ceac68a6609", "english")).toEqual("newt token easy syringe picked lettuce igloo village tapestry joking debut ostrich laptop nowhere vocal sword splendid welders react laboratory hold skulls jargon ladder hold");
            expect(mn_encode("a9c5006d4f09be37af5c7ba77b44813e", "english")).toEqual("ambush rustled cousin ivory civilian heels fugitive berries scenic silk ingested pierce ambush");
            expect(mn_encode("637f072b0cb04bd7d15a66637b3daeea", "english")).toEqual("bicycle coal gauze cottage happens dodge irony decay nibs apply etiquette daytime cottage");
            expect(mn_encode("b154779515d90f2fd60b3326fa5a5b95", "english")).toEqual("different pivot elope alarms ponies tinted tumbling faulty itself peculiar inorganic zones alarms");
        });
        it("should decode mnemonics", function() {
            expect(mn_decode("fazed theatrics ravine corrode dwindling sword ivory pivot owed gang imagine inundate frying border recipe gypsy situated algebra seeded object elbow august recipe sample owed", "english")).toEqual("11fcd1dae09c57999d3714f8f147a3032a2efe958ffa7641d33312a65401f90a");
            expect(mn_decode("espionage lordship error hull stick violin adapt zones pests money adept tattoo gown android pimple tasked dusted sighting alarms aerial calamity aptitude hijack injury pimple", "english")).toEqual("bb802fc2081151211a640aa72f6515d3a4fe979cc8c26a8d8737ac1ff9195909");
            expect(mn_decode("newt token easy syringe picked lettuce igloo village tapestry joking debut ostrich laptop nowhere vocal sword splendid welders react laboratory hold skulls jargon ladder hold", "english")).toEqual("b585485e954430d5e2bb5fe55c76ca704a5c855c0c932e2877649ceac68a6609");
            expect(mn_decode("ambush rustled cousin ivory civilian heels fugitive berries scenic silk ingested pierce ambush", "english")).toEqual("a9c5006d4f09be37af5c7ba77b44813e");
            expect(mn_decode("bicycle coal gauze cottage happens dodge irony decay nibs apply etiquette daytime cottage", "english")).toEqual("637f072b0cb04bd7d15a66637b3daeea");
            expect(mn_decode("different pivot elope alarms ponies tinted tumbling faulty itself peculiar inorganic zones alarms", "english")).toEqual("b154779515d90f2fd60b3326fa5a5b95");
        });
        it("should detect invalid mnemonics", function() {
            expect(function() {
                mn_decode("newt token easy syringe picked lettuce igloo village tapestry joking debut ostrich laptop nowhere vocal sword splendid welders react laboratory hold skulls jargon ladder skulls");
            }).toThrow("invalid checksum");

            expect(function() {
                mn_decode("estionage lordship error hull stick violin adapt zones pests money adept tattoo gown android pimple tasked dusted sighting alarms aerial calamity aptitude hijack injury pimple");
            }).toThrow("invalid checksum");

            expect(function() {
                mn_decode("faoed theatrics ravine corrode dwindling sword ivory pivot owed gang imagine inundate frying border recipe gypsy situated algebra seeded object elbow august recipe sample owed");
            }).toThrow("invalid word in mnemonic");

            expect(function() {
                mn_decode("fazed theatrics ravine corrode dwindling sword ivory pivot owed gang imagine inundate frying border recipe gypsy situated algebra seeded object elbow august recipe sample");
            }).toThrow("missing checksum");

            expect(function() {
                mn_decode("fazed theatrics ravine corrode dwindling sword ivory pivot owed gang imagine inundate frying border recipe gypsy situated algebra seeded object elbow august recipe");
            }).toThrow("invalid number of words");

            expect(function() {
                mn_decode("divferent pivot elope alarms ponies tinted tumbling faulty itself peculiar inorganic zones alarms");
            }).toThrow("invalid checksum");

            expect(function() {
                mn_decode("aaa coal gauze cottage happens dodge irony decay nibs apply etiquette daytime cottage");
            }).toThrow("invalid word in mnemonic");

            expect(function() {
                mn_decode("divferent pivot elope alarms ponies tinted tumbling faulty itself peculiar inorganic zones");
            }).toThrow("missing checksum");

            expect(function() {
                mn_decode("ambush rustled cousin ivory civilian heels fugitive berries scenic silk ingested pierce ambush pivot");
            }).toThrow("invalid number of words");
        });
    });
});
