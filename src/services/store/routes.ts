import { Request, Response } from "express";
import { addressReader } from "./common";
import * as path from "path";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
    	res.sendFile(path.join(__dirname, '../../../index.html'));
    }
  },
  {
    path: "/store/address",
    method: "get",
    handler: async (req: Request, res: Response) => {
		let addressData = addressReader(req.query);
		res.status(200).send({
			"message" : (addressData!=="" ? "Store Found :- "+addressData : "Store Not Found")
		});
    }
  }
];
