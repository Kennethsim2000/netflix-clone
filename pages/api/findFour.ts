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
    const { movieIds } = req.body;
    const firstFourMovieIds = movieIds.slice(0, 4);

    const movies = await prismadb.movie.findMany({
      where: {
        id: {
          in: firstFourMovieIds,
        },
      },
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}
