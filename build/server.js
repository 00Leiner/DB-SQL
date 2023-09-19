"use strict";
// import http from "http";
// import bodyParser from "body-parser";
// import express from "express";
// import Logging from "./config/Logging";
// import config from "./config/config";
// import bookRoutes from "./routes/Book";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const NAMESPACE = "Server";
// const router = express();
// /** log the request */
// router.use((req, res, next) => {
//   Logging.info(
//     NAMESPACE,
//     `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
//   );
//   res.on("finish", () => {
//     Logging.info(
//       NAMESPACE,
//       `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
//     );
//   });
// });
// /** parse the body of the request */
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());
// /** rules of our API */
// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method == "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     res.status(200).json({});
//   }
//   next();
// });
// /** Routes go here */
// router.use("/books", bookRoutes);
// /** Error handling */
// router.use((req, res, next) => {
//   const error = new Error("Not found");
//   res.status(404).json({
//     message: error.message,
//   });
// });
// const httpServer = http.createServer(router);
// httpServer.listen(config.server.port, () =>
//   Logging.info(
//     NAMESPACE,
//     `Server running on ${config.server.hostname}: ${config.server.port}`
//   )
// );
const mysql = require("mysql2/promise");
// Create a connection pool
const pool = mysql.createPool({
    host: "3000",
    user: "admin",
    password: "j%;?jQ4dY;HL4tq",
    database: "database-1-instance-1.cie2tal3qlbe.ap-southeast-2.rds.amazonaws.com",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
// Example query using async/await
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows, fields] = yield pool.query("SELECT * FROM your_table");
            console.log("Data:", rows);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
fetchData();
