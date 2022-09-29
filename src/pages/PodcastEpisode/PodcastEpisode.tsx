import { useParams } from "react-router-dom";
import { usePodcastById } from "../../api/usePodcastById";
import { usePodcastFeed } from "../../api/usePodcastFeed";
import { base64DecodeUrl } from "../../utils/encoding";
import { removeCDATA } from "../../utils/html";
import { Audio, Description, Root, Title } from "./PodcastEpisode.styled";

const PodcastEpisode = () => {
  const { id = "", episodeId: paramEpisodeId = "" } = useParams<{
    id: string;
    episodeId: string;
  }>();

  // decode episode id from base64
  const episodeId = decodeURI(base64DecodeUrl(paramEpisodeId));

  // get podcast and its feed
  const { data } = usePodcastById(id);
  const { data: feed, isLoading } = usePodcastFeed(
    data?.results?.[0].feedUrl ?? "",
    {
      suspense: false,
    }
  );

  // find the episode by its guid
  const episode = feed?.evaluate(`//item[guid/text()="${episodeId}"]`, feed);
  const node = episode?.iterateNext() as Element | null;

  // data to display
  const title = node?.querySelector("title")?.textContent ?? "";
  const description = removeCDATA(
    node?.querySelector("description")?.textContent ?? ""
  );
  const audio = node?.querySelector("enclosure");
  const audioUrl = audio?.getAttribute("url") ?? "";
  const audioType = audio?.getAttribute("type") ?? "";

  if (isLoading) {
    return <span>caragando...</span>;
  }

  return (
    <Root>
      <Title>{title}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <Audio controls>
        <source src={audioUrl} type={audioType} />
        Your browser does not support the audio tag.
      </Audio>
    </Root>
  );
};

export default PodcastEpisode;
