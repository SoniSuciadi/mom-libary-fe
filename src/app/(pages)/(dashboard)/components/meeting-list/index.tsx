"use client";
import React, { useMemo } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Description as FileTextIcon,
  Add as PlusIcon,
} from "@mui/icons-material";
import { fadeIn } from "../animated-card";
import { Meeting } from "../../page";
import MeetingCard from "../meeting-card";
import useInfiniteApiRequest from "@/hooks/useApiRequest/useInfiniteApiRequest";
import { useQueryState } from "nuqs";

export type Departement =
  | "engineering"
  | "sales"
  | "finance"
  | "product"
  | "hr";
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
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Card
          sx={{
            animation: `${fadeIn} 0.5s ease-out forwards`,
            textAlign: "center",
            p: 6,
          }}
        >
          <CardContent>
            <FileTextIcon
              sx={{ fontSize: 64, color: "text.disabled", mb: 2 }}
            />
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              No Meeting Minutes Found
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              {keyword
                ? "Try adjusting your search terms"
                : "Start by creating your first meeting minutes"}
            </Typography>
            <Link href="/mom">
              <Button
                variant="contained"
                startIcon={<PlusIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 14px rgba(0, 118, 255, 0.4)",
                  background: "linear-gradient(135deg, #0066ff, #0051cc)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0051cc, #0040a3)",
                  },
                }}
              >
                Add Your First Meeting
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MeetingList;
