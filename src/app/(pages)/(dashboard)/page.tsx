import DashboardHeader from "@/app/(pages)/(dashboard)/components/dashboard-header";
import Header from "@/app/(pages)/(dashboard)/components/header";
import SearchFilterCard from "@/app/(pages)/(dashboard)/components/search-filter-card";
import { Stack } from "@mui/material";
import MeetingList, { Department } from "./components/meeting-list";

export interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: number;
  status: string;
  department: Department;
}
export default function Page() {
  const mockMeetings: Meeting[] = [
    {
      id: 1,
      title: "Project Kickoff Meeting",
      date: "2024-08-01",
      time: "09:00",
      attendees: 8,
      status: "completed",
      department: "engineering",
    },
    {
      id: 2,
      title: "Weekly Sales Review",
      date: "2024-07-30",
      time: "14:30",
      attendees: 5,
      status: "completed",
      department: "sales",
    },
    {
      id: 3,
      title: "Budget Planning Q3",
      date: "2024-07-28",
      time: "10:00",
      attendees: 12,
      status: "completed",
      department: "finance",
    },
    {
      id: 4,
      title: "Product Strategy Discussion",
      date: "2024-07-25",
      time: "15:00",
      attendees: 6,
      status: "completed",
      department: "product",
    },
    {
      id: 5,
      title: "HR Policy Updates",
      date: "2024-07-22",
      time: "11:30",
      attendees: 15,
      status: "completed",
      department: "hr",
    },
  ];
  return (
    <Stack>
      <Header />
      <Stack px={"2rem"} mt={"1rem"} gap={"1rem"}>
        <DashboardHeader />
        <SearchFilterCard />
        <MeetingList meetings={mockMeetings} searchQuery="" />
      </Stack>
    </Stack>
  );
}
