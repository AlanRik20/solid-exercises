import { SimplePrinter } from "./clases/SimplePrinter";
import { MultiFunctionPrinter } from "./clases/MultiFunctionPrinter";
import { IPrinter } from "./interfaces/IPrinter";
import { IScanner } from "./interfaces/IScanner";
import { IFax } from "./interfaces/IFax";

const simplePrinter = new SimplePrinter();
const multiPrinter = new MultiFunctionPrinter();

console.log("Impresora Simple:");
simplePrinter.print();

console.log("Impresora Multifunción:");
multiPrinter.print();
multiPrinter.scan();
multiPrinter.fax();
