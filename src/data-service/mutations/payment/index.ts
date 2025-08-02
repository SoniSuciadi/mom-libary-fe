import { MutationDataService } from "../../types";

export type PaymentMutationKeys = "create-payment";

export const paymentMutations: MutationDataService<PaymentMutationKeys> = {
  "create-payment": {
    url: "payment",
    method: "POST",
    refetchQueries: [],
  },
};
