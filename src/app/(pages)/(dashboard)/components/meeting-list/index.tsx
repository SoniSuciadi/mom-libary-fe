"use client";
import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";


import MeetingCard from "../meeting-card";
import useInfiniteApiRequest from "@/hooks/useApiRequest/useInfiniteApiRequest";
import { useQueryState } from "nuqs";
import { Meeting } from "../../types";
import NoMeetingFound from "../no-meeting-found";

const MeetingList = () => {
  const [keyword] = useQueryState("search");
  const [filter] = useQueryState("filter");
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteApiRequest<Meeting>({
      key: "mom-list",
      config: {
        query: {
          rowsPerPage: 12,
          search: keyword,
          filter,
        },
      },
    });

  const allMeeting = useMemo(() => {
    return data?.pages.flatMap((page) => page.items);
  }, [data]);

  return allMeeting?.length > 0 ? (
    <InfiniteScroll
      dataLength={allMeeting.length}
      next={fetchNextPage}
      hasMore={Boolean(hasNextPage)}
      loader={isFetching && <p>Memuat...</p>}
      scrollableTarget="scrollable-chat"
    >
      {[...allMeeting].map((meeting, index) => {
        return (
          <Grid size={{ xs: 12 }} key={index} mb={2}>
            <MeetingCard index={index} meeting={meeting} />
          </Grid>
        );
      })}
    </InfiniteScroll>
  ) : (
   <NoMeetingFound />
  );
};

export default MeetingList;
