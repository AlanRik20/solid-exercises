import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount {
    apply(price: number): number {
        return price * 0.15;
    }
}
