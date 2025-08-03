import DashboardHeader from "@/app/(pages)/(dashboard)/components/dashboard-header";
import Header from "@/app/(pages)/(dashboard)/components/header";
import SearchFilterCard from "@/app/(pages)/(dashboard)/components/search-filter-card";
import { Stack } from "@mui/material";
import MeetingList from "./components/meeting-list";
import FloatingChat from "./components/floating-chat";


export default function Page() {
  return (
    <Stack>
      <Header />
      <Stack px={"2rem"} mt={"1rem"} gap={"1rem"}>
        <DashboardHeader />
        <SearchFilterCard />
        <MeetingList />
      </Stack>
      <FloatingChat />
    </Stack>
  );
}
