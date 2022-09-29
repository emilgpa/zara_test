import { Image, LinkStyled, Root, Title } from "./HomePodcast.styled";

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
