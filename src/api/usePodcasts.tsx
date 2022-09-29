import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { APICacheLocalStorage } from "../apicache/localstorage";
import { Day } from "../utils/date";
import { corsProxy } from "./corsProxy";
import { Podcasts } from "./usePodcasts.types";

export const usePodcasts = (
  options?: Omit<
    UseQueryOptions<any, unknown, Podcasts, string[]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery(
    ["podcats"],
    async () => {
      const item = APICacheLocalStorage.getItem(`podcasts`);
      if (item) {
        console.log("return podcasts cached");
        return item.data;
      }
      return corsProxy(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
    },
    {
      ...options,
      onSuccess(data) {
        options?.onSuccess?.(data);
        APICacheLocalStorage.setItem(`podcasts`, data, Day);
      },
    }
  );
};
