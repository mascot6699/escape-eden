describe("Money Filter", function() {
    var money;

    beforeEach(module("thinWallet"));
    beforeEach(inject(function(moneyFilter) {
        money = moneyFilter;
    }));

    it("should be defined", function() {
        expect(money).toBeDefined();
    });
    it("formats correctly", function() {
        expect(money("1234000000000")).toEqual("1.234");
        expect(money("1234000000000", false, true)).toEqual("1.234 XMR");
        expect(money("1234000000000", true, false)).toEqual("1.234000000000");
        expect(money("1234000000000", true, true)).toEqual("1.234000000000 XMR");
    });
    it("calls formatMoney", function() {
        spyOn(cnUtil, 'formatMoney');
        money("1234000000000");
        expect(cnUtil.formatMoney).toHaveBeenCalled();
    });
    it("calls formatMoneySymbol", function() {
        spyOn(cnUtil, 'formatMoneySymbol');
        money("1234000000000", false, true);
        expect(cnUtil.formatMoneySymbol).toHaveBeenCalled();
    });
    it("calls formatMoneyFull", function() {
        spyOn(cnUtil, 'formatMoneyFull');
        money("1234000000000", true, false);
        expect(cnUtil.formatMoneyFull).toHaveBeenCalled();
    });
    it("calls formatMoneyFullSymbol", function() {
        spyOn(cnUtil, 'formatMoneyFullSymbol');
        money("1234000000000", true, true);
        expect(cnUtil.formatMoneyFullSymbol).toHaveBeenCalled();
    });
});