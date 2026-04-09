import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidate: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.query.token !== process.env.REVALIDATE_KEY) {
    return res.status(401).json({ revalidate: false, message: "Invalid token" });
  }

  if (req.query.data === "produk") {
    try {
      await res.revalidate("/produk/static");
      return res.status(200).json({ revalidate: true });
    } catch (error) {
      console.error("Error revalidating:", error);
      return res.status(500).json({ revalidate: false });
    }
  }
  
  return res.status(400).json({
    revalidate: false,
    message: "Invalid query parameter. Expected 'data=produk'.",
  });
}
