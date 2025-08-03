import * as yup from "yup";

export const momSchema = yup.object({
  title: yup.string().required(),
  meetingDate: yup.string().required(),
  meetingTime: yup.string().required(),
  location: yup.string().required(),
  departement: yup.string().required(),
  facilitator: yup.string().required(),
  attendences: yup
    .array(
      yup.object({
        name: yup.string().required(),
      })
    )
    .required(),
  agenda: yup.string().required(),
  discussionPoint: yup.string().required(),
  decisionsMade: yup.string().required(),
  actionItem: yup.string().required(),
});

export const momSchemaDefaultValue = {
  title: "",
  meetingDate: "",
  meetingTime: "",
  location: "",
  departement: "",
  facilitator: "",
  attendences: [
    {
      name: "",
    },
  ],
  agenda: "",
  discussionPoint: "",
  decisionsMade: "",
  actionItem: "",
};
