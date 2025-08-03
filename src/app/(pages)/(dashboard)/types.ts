import { Departement } from "./components/meeting-card/types";

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  attendees: string[];
  status: string;
  departement: Departement;
}
