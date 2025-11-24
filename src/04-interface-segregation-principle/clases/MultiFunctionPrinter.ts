import { IPrinter } from "../interfaces/IPrinter";
import { IScanner } from "../interfaces/IScanner";
import { IFax } from "../interfaces/IFax";

export class MultiFunctionPrinter implements IPrinter, IScanner, IFax {
    print(): void {
        console.log("Imprimiendo...");
    }

    scan(): void {
        console.log("Escaneando...");
    }

    fax(): void {
        console.log("Enviando fax...");
    }
}
