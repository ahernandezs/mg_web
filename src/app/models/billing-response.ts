export class BillingResponse{
constructor(
    public numTransToPay,
    public numTransFree,
    public bankName,
    public date,
    public entries
) {}
}
