export class Price {
    amount: number;
    currency?: string;
    salePrice?: number;
    isOnSale?: boolean;

    constructor(amount: number, currency?: string, salePrice?: number, isOnSale?: boolean){
        this.amount = amount;
        this.currency = currency? currency : 'USD';
        this.salePrice = salePrice? salePrice : amount;
        this.isOnSale = isOnSale? isOnSale : false;
    }
}