describe("Payment URI filter", function() {
    var paymentURI;

    beforeEach(module("thinWallet"));
    beforeEach(inject(function(paymentUriFilter) {
        paymentURI = paymentUriFilter;
    }));

    it("should be defined", function() {
        expect(paymentURI).toBeDefined();
    });

    it("encodes payment URI", function() {
        expect(paymentURI({
            address: "47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM"
        })).toEqual("monero:47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM");

        expect(paymentURI({
            address: "47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM",
            amount: "12.3"
        })).toEqual("monero:47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM?tx_amount=12.3");

        expect(paymentURI({
            address: "47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM",
            amount: "12.3",
            label: "the label",
            payment_id: "cdb661d66f06699f2c9350bd86aca312ba9a160202a99c4c0bf3416457957f2d",
            message: "the message"
        })).toEqual("monero:47c1KgmHFxPdjJyhRRwimR6sUzASqnahah59Yo28rjScj3yoo7n1Ty9Z2MAAaZkDeY12NJmgojWWR6bYXyyhhQp9BVhpRrM?tx_amount=12.3&tx_description=the%20label&tx_payment_id=cdb661d66f06699f2c9350bd86aca312ba9a160202a99c4c0bf3416457957f2d&tx_message=the%20message");
    });
});