import { TableBody } from "../../components/Table/Body";
import { TableCell } from "../../components/Table/Cell";
import { TableHead } from "../../components/Table/Head";
import { TableRow } from "../../components/Table/Row";
import { Table } from "../../components/Table/Table";
import { TrackList } from "./Podcast.styled";
import { Track } from "./PodcastTrack";

interface PodcastTrackListProps {
  podcastId: string;
  items: Element[];
}

export const PodcastTrackList = ({
  items,
  podcastId,
}: PodcastTrackListProps) => {
  return (
    <TrackList>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(items ?? []).map((p) => {
            const uid = p.querySelector("guid")?.textContent;
            return <Track key={uid} podcastId={podcastId} item={p} />;
          })}
        </TableBody>
      </Table>
    </TrackList>
  );
};
