import { useParams } from "react-router-dom";
import styled from "styled-components";
import { usePodcastById } from "../../api/usePodcastById";
import { usePodcastFeed } from "../../api/usePodcastFeed";
import LayoutPodcast from "../../layouts/Podcast/LayoutPodcast";
import { Layout } from "../../layouts/Root/Layout";
import { Track } from "./PodcastTrack";

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Episodes = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Podcast = () => {
  const { id = "" } = useParams<{ id: string }>();

  const { data } = usePodcastById(id, {
    suspense: false,
  });
  const { data: feed, isFetching } = usePodcastFeed(
    data?.results?.[0].feedUrl ?? "",
    {
      suspense: false,
    }
  );

  // get all items (episodes)
  const items = feed?.querySelectorAll("channel item");

  return (
    <Layout>
      <LayoutPodcast id={id}>
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
      </LayoutPodcast>
    </Layout>
  );
};

export default Podcast;
