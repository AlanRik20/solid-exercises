import { IFlyingBird } from "../interfaces/IFlyingBird";

export class Sparrow implements IFlyingBird {
    fly(): void {
        console.log("El gorrión está volando...");
    }

    eat(): void {
        console.log("El gorrión está comiendo...");
    }
}
