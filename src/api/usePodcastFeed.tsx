import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { corsProxy } from "./corsProxy";

export const usePodcastFeed = (
  uri: string,
  options?: Omit<
    UseQueryOptions<any, unknown, Document, string[]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery(
    ["podcast", "feed", uri],
    async () => {
      return corsProxy(uri);
    },
    {
      enabled: uri !== "",
      ...options,
    }
  );
};
