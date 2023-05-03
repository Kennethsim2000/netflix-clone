import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "GET") {
    return res.status(405).end();
  }
  const movieCount = await prismadb.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovies = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });
  return res.status(200).json(randomMovies[0]);
}

/*This API is used to retrieve a random movie from the database and return it*/
