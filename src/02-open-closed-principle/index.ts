import { RegularDiscount } from "./clases/RegularDiscount";
import { VipDiscount } from "./clases/VipDiscount";
import { StudentDiscount } from "./clases/StudentDiscount";
import { DiscountContext } from "./clases/DiscountContext";

const price = 100;

const regular = new RegularDiscount();
const vip = new VipDiscount();
const student = new StudentDiscount();

const context = new DiscountContext(regular);
console.log(`Descuento Regular: ${context.calculateDiscount(price)}`);

context.setStrategy(vip);
console.log(`Descuento VIP: ${context.calculateDiscount(price)}`);

context.setStrategy(student);
console.log(`Descuento Estudiante: ${context.calculateDiscount(price)}`);
