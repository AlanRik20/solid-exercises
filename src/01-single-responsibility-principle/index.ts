import { Report } from "./clases/Report";
import { ReportPrinter } from "./clases/ReportPrinter";
import { ReportSaver } from "./clases/ReportSaver";

const report = new Report("Reporte de Ventas", "Contenido del reporte...");
const printer = new ReportPrinter();
const saver = new ReportSaver();

printer.printReport(report);
saver.saveToFile(report);
