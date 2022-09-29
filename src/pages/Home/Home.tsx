import { ChangeEvent, useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import { usePodcasts } from "../../api/usePodcasts";
import { Entry } from "../../api/usePodcasts.types";
import { Layout } from "../../layouts/Root/Layout";
import { Day } from "../../utils/date";
import { Podcast } from "./HomePodcast";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 950px;
`;

const PodcastsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  width: 100%;
  margin: auto;
  justify-content: center;
  grid-gap: 20px;
`;

const InputFilter = styled.input`
  height: 40px;
  max-width: 350px;
  width: 100%;
  padding: 4px 8px;
`;

const Searcher = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 820px;
  margin-bottom: 40px;
`;

const SearcherIndicator = styled.div`
  position: absolute;
  right: 0;
`;

const BagPodcasts = styled.div`
  position: absolute;
  left: 0;
  padding: 0px 8px;
  background-color: #d5ce43;
  color: #272727;
  border-radius: 16px;
  margin-right: 16px;
`;

const Home = () => {
  const { data, isFetching } = usePodcasts({
    staleTime: Day,
    suspense: false,
  });

  const [isPending, startTransition] = useTransition();
  const [podcasts, setPodcasts] = useState<Entry[]>(data?.feed.entry ?? []);

  useEffect(() => {
    setPodcasts(data?.feed.entry ?? []);
  }, [data?.feed.entry]);

  const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    startTransition(() => {
      const lc = value.toLowerCase();
      setPodcasts(
        data?.feed.entry.filter(
          (p) =>
            p["im:name"].label.toLowerCase().includes(lc) ||
            p["im:artist"].label.toLowerCase().includes(lc)
        ) ?? []
      );
    });
  };

  return (
    <Layout>
      <Root>
        <Searcher>
          <BagPodcasts>{podcasts.length}</BagPodcasts>
          <InputFilter onChange={onFilter} />
          {isPending && <SearcherIndicator>buscando...</SearcherIndicator>}
        </Searcher>
        <PodcastsList>
          {isFetching && <span>cargando...</span>}
          {podcasts.map((p) => (
            <Podcast
              key={p.id.attributes["im:id"]}
              id={p.id.attributes["im:id"]}
              title={p["im:name"].label}
              author={p["im:artist"].label}
              image={p["im:image"][0].label}
            />
          ))}
        </PodcastsList>
      </Root>
    </Layout>
  );
};

export default Home;
