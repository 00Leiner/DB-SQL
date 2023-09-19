"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("../config/Logging"));
const mysql_1 = require("../config/mysql");
const NAMESPACE = "Books";
const createBook = (req, res, next) => { };
const getAllBooks = (req, res, next) => {
    Logging_1.default.info(NAMESPACE, "Getting all books");
    let query = "SELECT * FROM books";
    (0, mysql_1.Connect)()
        .then((connection) => {
        (0, mysql_1.Query)(connection, query)
            .then((results) => {
            return res.status(200).json({
                results,
            });
        })
            .catch((error) => {
            Logging_1.default.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error,
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch((error) => {
        Logging_1.default.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error,
        });
    });
};
exports.default = { getAllBooks };
