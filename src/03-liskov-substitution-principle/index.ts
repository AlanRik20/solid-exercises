import { Sparrow } from "./clases/Sparrow";
import { Penguin } from "./clases/Penguin";
import { IFlyingBird } from "./interfaces/IFlyingBird";
import { IBird } from "./interfaces/IBird";

function makeBirdFly(bird: IFlyingBird) {
    bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

console.log("Probando Gorrión:");
makeBirdFly(sparrow);
sparrow.eat();

console.log("Probando Pingüino:");
// makeBirdFly(penguin); // Esto daría error de compilación, lo cual es correcto según LSP
penguin.eat();
