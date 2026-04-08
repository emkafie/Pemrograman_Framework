import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveProducts,
  retrieveProductById,
} from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.query.produk![1]) {
    const { produk } = req.query;
    const data = await retrieveProductById("products", produk![1]);

    res.status(200).json({
      status: true,
      status_code: 200,
      data: data,
    });
  } else {
    const data = await retrieveProducts("products");

    res.status(200).json({
      status: true,
      status_code: 200,
      data: data,
    });
  } 
}
