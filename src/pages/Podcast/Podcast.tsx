import { useParams } from "react-router-dom";
import { usePodcastById } from "../../api/usePodcastById";
import { usePodcastFeed } from "../../api/usePodcastFeed";
import { Details, Episodes } from "./Podcast.styled";
import { PodcastTrackList } from "./PodcastTrackList";

const Podcast = () => {
  const { id = "" } = useParams<{ id: string }>();

  const { data } = usePodcastById(id, {
    suspense: false,
  });
  // get feed
  const feedUrl = data?.results?.[0].feedUrl ?? "";
  const { data: feed, isFetching } = usePodcastFeed(feedUrl, {
    suspense: false,
  });

  // get all items (episodes)
  const items = feed?.querySelectorAll("channel item");

  return (
    <Details>
      <Episodes>Episodes: {data?.results?.[0]?.trackCount}</Episodes>
      {isFetching ? (
        <span>cargando...</span>
      ) : (
        <PodcastTrackList items={[...(items ?? [])]} podcastId={id} />
      )}
    </Details>
  );
};

export default Podcast;
