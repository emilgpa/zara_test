import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePodcastById } from "../../api/usePodcastById";
import { usePodcastFeed } from "../../api/usePodcastFeed";
import { Divider } from "../../components/Divider";
import { NavLink } from "../../components/NavLink";
import { removeCDATA } from "../../utils/html";
import { Layout } from "../Root/Layout";

const Root = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  margin: auto;
  max-width: 950px;
  margin: auto;
  gap: 32px;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;
  top: 86px;
  height: fit-content;

  gap: 16px;
`;

const Logo = styled.img`
  width: fit-content;
  display: block;
`;

const ChannelLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const Title = styled.span`
  text-align: center;
  font-size: 16px;
`;

const Author = styled.span`
  text-align: center;
  font-size: 14px;
`;

const Description = styled.div`
  text-align: center;
`;

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
