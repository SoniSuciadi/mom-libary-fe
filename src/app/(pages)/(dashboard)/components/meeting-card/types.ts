import { Meeting } from "../../types";

export interface MeetingCardProps {
  meeting: Meeting;
  index: number;
}
export type Departement =
  | "engineering"
  | "sales"
  | "finance"
  | "product"
  | "hr";
