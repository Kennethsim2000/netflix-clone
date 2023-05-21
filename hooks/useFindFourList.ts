import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";

const useFindFourList = (): {
  data: Movie[] | undefined;
  error: any;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR<Movie[]>("/api/findFour", fetcher, {
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

export default useFindFourList;
