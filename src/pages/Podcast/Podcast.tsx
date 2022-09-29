import { useParams } from "react-router-dom";
import { usePodcastById } from "../../api/usePodcastById";
import { usePodcastFeed } from "../../api/usePodcastFeed";
import { Details, Episodes, TrackList } from "./Podcast.styled";
import { Track } from "./PodcastTrack";

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
      <TrackList>
        {isFetching && <span>cargando...</span>}
        {Array.from(items ?? []).map((p) => {
          const uid = p.querySelector("guid")?.textContent;
          return <Track key={uid} podcastId={id} item={p} />;
        })}
      </TrackList>
    </Details>
  );
};

export default Podcast;
