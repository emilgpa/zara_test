import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { APICacheLocalStorage } from "../apicache/localstorage";
import { Day } from "../utils/date";
import { corsProxy } from "./corsProxy";
import { Podcast } from "./usePodcastById.types";

export const usePodcastById = (
  id: string,
  options?: Omit<
    UseQueryOptions<any, unknown, Podcast, string[]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery(
    ["podcast", id],
    async () => {
      const item = APICacheLocalStorage.getItem(`podcast-${id}`);
      if (item) {
        console.log(`return podcast ${id} cached`);
        return item.data;
      }
      return corsProxy(`https://itunes.apple.com/lookup?id=${id}`);
    },
    {
      ...options,
      enabled: id !== "",
      onSuccess(data) {
        options?.onSuccess?.(data);
        APICacheLocalStorage.setItem(`podcast-${id}`, data, Day);
      },
    }
  );
};
