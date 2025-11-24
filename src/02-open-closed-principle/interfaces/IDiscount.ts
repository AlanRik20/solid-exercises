export interface IDiscount {
    apply(price: number): number;
}
