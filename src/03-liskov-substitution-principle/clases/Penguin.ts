import { IBird } from "../interfaces/IBird";

export class Penguin implements IBird {
    eat(): void {
        console.log("El pingüino está comiendo...");
    }
}
