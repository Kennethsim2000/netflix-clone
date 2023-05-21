import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import exp from "constants";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movieList", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovieList;
