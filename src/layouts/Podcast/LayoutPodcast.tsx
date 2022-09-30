import { Outlet, useParams } from "react-router-dom";
import { usePodcastById } from "../../api/usePodcastById";
import { usePodcastFeed } from "../../api/usePodcastFeed";
import { Divider } from "../../components/Divider/Divider";
import { NavLink } from "../../components/NavLink/NavLink";
import { removeCDATA } from "../../utils/html";
import { Layout } from "../Root/Layout";
import {
  Aside,
  Author,
  ChannelLink,
  Description,
  Logo,
  Root,
  Title,
} from "./LayoutPodcast.styled";

const LayoutPodcast = () => {
  const { id = "" } = useParams();

  const { data } = usePodcastById(id, {
    suspense: false,
  });
  const { data: feed } = usePodcastFeed(data?.results?.[0]?.feedUrl ?? "", {
    suspense: false,
  });

  const podcast = data?.results?.[0];
  const title = podcast?.collectionName ?? "";
  const author = podcast?.artistName ?? "";
  const logo = podcast?.artworkUrl100 ?? "";
  const description = removeCDATA(
    feed?.querySelector("channel description")?.textContent ?? ""
  );

  return (
    <Layout>
      <Root>
        <Aside>
          <NavLink to={`/podcast/${id}`}>
            <Logo src={logo} />
          </NavLink>
          <Divider direction="h" color="white" />
          <ChannelLink to={`/podcast/${id}`}>
            <Title>{title}</Title>
            <Author>by {author}</Author>
          </ChannelLink>
          <Divider direction="h" color="white" />
          <Description
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Aside>
        <Outlet />
      </Root>
    </Layout>
  );
};

export default LayoutPodcast;
