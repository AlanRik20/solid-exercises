import { IDiscount } from "../interfaces/IDiscount";

export class DiscountContext {
    private strategy: IDiscount;

    constructor(strategy: IDiscount) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IDiscount) {
        this.strategy = strategy;
    }

    calculateDiscount(price: number): number {
        return this.strategy.apply(price);
    }
}
