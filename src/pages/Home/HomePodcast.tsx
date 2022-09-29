import styled from "styled-components";
import { NavLink } from "../../components/NavLink";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
`;

const Image = styled.img`
  border-radius: 100%;
  width: fit-content;
`;

const Title = styled.span`
  font-size: 12px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
`;

interface PodcastProps {
  id: string;
  title: string;
  image: string;
  author: string;
}

export const Podcast = ({ id, title, image }: PodcastProps) => {
  return (
    <LinkStyled to={`/podcast/${id}`}>
      <Root>
        <Image src={image} />
        <Title>{title}</Title>
      </Root>
    </LinkStyled>
  );
};
