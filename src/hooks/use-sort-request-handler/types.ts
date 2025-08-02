interface DefaultValue {
  order?: "ASC" | "DESC";
  orderBy?: string;
}

export interface UseSortRequestHandlerProps {
  defaultValue?: DefaultValue;
}
