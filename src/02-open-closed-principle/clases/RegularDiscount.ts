import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount {
    apply(price: number): number {
        return price * 0.1;
    }
}
