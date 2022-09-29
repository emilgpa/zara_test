import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { usePodcasts } from "../../api/usePodcasts";
import { Entry } from "../../api/usePodcasts.types";
import { Layout } from "../../layouts/Root/Layout";
import {
  BadgetPodcasts,
  InputFilter,
  PodcastsList,
  Root,
  Searcher,
  SearcherIndicator,
} from "./Home.styled";
import { Podcast } from "./HomePodcast";

const Home = () => {
  const { data, isFetching } = usePodcasts({
    suspense: false,
  });

  const [isPending, startTransition] = useTransition();
  const [podcasts, setPodcasts] = useState<Entry[]>(data?.feed.entry ?? []);

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

  useEffect(() => {
    setPodcasts(data?.feed.entry ?? []);
  }, [data?.feed.entry]);

  return (
    <Layout>
      <Root>
        <Searcher>
          <BadgetPodcasts>{podcasts.length}</BadgetPodcasts>
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
