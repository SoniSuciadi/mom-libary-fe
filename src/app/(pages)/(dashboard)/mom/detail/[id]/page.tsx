"use client";

import React from "react";
import { Typography, Divider, Stack, Container } from "@mui/material";
import { useParams } from "next/navigation";
import useQueryApiRequest from "@/hooks/useApiRequest/useQueryApiRequest";
import { InferType } from "yup";
import MdxSection from "../components/mdx-section";
import { momSchema } from "../../components/mom-form/config";

export default function Page() {
  const { id } = useParams();
  const { data: meeting } = useQueryApiRequest<InferType<typeof momSchema>>({
    key: "mom-detail",
    config: {
      params: {
        id: id?.toString() || "",
      },
    },
    options: {
      enabled: !!id,
    },
  });
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {meeting?.title}
      </Typography>

      <Stack spacing={1} mb={2}>
        <Typography>
          <strong>Tanggal:</strong> {meeting?.meetingDate}
        </Typography>
        <Typography>
          <strong>Waktu:</strong> {meeting?.meetingTime}
        </Typography>
        <Typography>
          <strong>Lokasi:</strong> {meeting?.location}
        </Typography>
        <Typography>
          <strong>Departemen:</strong> {meeting?.departement}
        </Typography>
        <Typography>
          <strong>Fasilitator:</strong> {meeting?.facilitator}
        </Typography>
        <Typography>
          <strong>Peserta:</strong>{" "}
          {meeting?.attendences.map((a) => a.name).join(", ")}
        </Typography>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <MdxSection title="Agenda" content={meeting?.agenda || ""} />
      <MdxSection
        title="Poin Diskusi"
        content={meeting?.discussionPoint || ""}
      />
      <MdxSection title="Keputusan" content={meeting?.decisionsMade || ""} />
      <MdxSection title="Tindak Lanjut" content={meeting?.actionItem || ""} />
    </Container>
  );
}
