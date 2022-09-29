import { NavLink } from "../../components/NavLink";
import { base64EncodeUrl } from "../../utils/encoding";
import { removeCDATA } from "../../utils/html";

const getId = (item: Element) => {
  // all podcast episode has "guid" but some have url so encode it in
  // base64 and decode in the podcast episode page
  const id = removeCDATA(item.querySelector("guid")?.textContent ?? "");
  return base64EncodeUrl(id);
};

interface TrackProps {
  podcastId: string;
  item: Element;
}

export const Track = ({ podcastId, item }: TrackProps) => {
  const title = item.querySelector("title");
  const id = getId(item);

  return (
    <NavLink to={`/podcast/${podcastId}/episode/${id}`}>
      {title?.textContent}
    </NavLink>
  );
};
