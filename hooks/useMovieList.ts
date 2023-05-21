import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";

const useMovieList = (): {
  data: Movie[] | undefined;
  error: any;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR<Movie[]>(
    "/api/movieList",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovieList;

// import useSWR from "swr";
// import fetcher from "@/lib/fetcher";

// const useMovieList = () => {
//   const { data, error, isLoading } = useSWR("/api/movieList", fetcher, {
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   });

//   return {
//     data,
//     error,
//     isLoading,
//   };
// };

// export default useMovieList;
