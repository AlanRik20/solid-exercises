import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount {
    apply(price: number): number {
        return price * 0.2;
    }
}
