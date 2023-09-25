import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { username, review, title, star } = req.body;
    const movie = await prismadb.movie.findUnique({
      where: {
        title: title,
      },
    });
    if (!movie) {
      return res.status(400).end();
    }
    const comment = await prismadb.comment.create({
      data: {
        title: movie.title || " ",
        thumbnailUrl: movie.thumbnailUrl,
        review: review,
        username: username,
        star: star,
      },
    });
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
