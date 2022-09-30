import { NavLink } from "../../components/NavLink/NavLink";
import { TableCell } from "../../components/Table/Cell";
import { TableRow } from "../../components/Table/Row";
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
  const id = getId(item);
  const title = item.querySelector("title");
  const date = item.querySelector("pubDate")?.textContent;
  const duration =
    item.getElementsByTagName("itunes:duration")?.[0]?.textContent ?? "";

  return (
    <TableRow>
      <TableCell>
        <NavLink to={`/podcast/${podcastId}/episode/${id}`}>
          {title?.textContent}
        </NavLink>
      </TableCell>
      <TableCell>{new Date(date ?? "").toLocaleDateString("es-ES")}</TableCell>
      <TableCell>{duration}</TableCell>
    </TableRow>
  );
};
