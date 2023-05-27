import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from "@prisma/client";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR<Movie>("/api/random", fetcher, {
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
export default useBillboard;

/* Fetch a random movie from the database
The options object means that the data will not automatically be revalidated if it's stale, if the user focuses on the tab, or if the user reconnects to the internet. */
