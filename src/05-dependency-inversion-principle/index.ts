import { App } from "./clases/App";
import { MySQLDatabase } from "./clases/MySQLDatabase";
import { PostgreSQLDatabase } from "./clases/PostgreSQLDatabase";

const mysql = new MySQLDatabase();
const postgres = new PostgreSQLDatabase();

const app1 = new App(mysql);
console.log("App con MySQL:");
app1.start();

const app2 = new App(postgres);
console.log("App con PostgreSQL:");
app2.start();
