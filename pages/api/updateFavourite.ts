import serverAuth from "@/lib/serverAuth";
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
    const currentUser = await prismadb.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    const favouriteId = req.body.favouriteId; // Assuming the request body contains the new favourite ID
    if (!currentUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    if (currentUser.favouriteIds.includes(favouriteId)) {
      //checking if the movie is already in user favourite
      return res.status(201).json({ message: "Movie already in favorites" });
    }
    const updatedUser = await prismadb.user.update({
      where: { id: currentUser?.id },
      data: {
        favouriteIds: [...currentUser.favouriteIds, favouriteId],
      },
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

/*Return current user */
