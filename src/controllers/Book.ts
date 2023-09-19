import { NextFunction, Request, Response } from "express";
import Logging from "../config/Logging";
import { Connect, Query } from "../config/mysql";

const NAMESPACE = "Books";

const createBook = (req: Request, res: Response, next: NextFunction) => {};

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
  Logging.info(NAMESPACE, "Getting all books");

  let query = "SELECT * FROM books";

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          return res.status(200).json({
            results,
          });
        })
        .catch((error) => {
          Logging.error(NAMESPACE, error.message, error);
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
      Logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};
export default { getAllBooks };
