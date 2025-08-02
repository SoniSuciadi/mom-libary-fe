type ConfigType = {
  params?: { [key: string]: string };
  query?: { [key: string]: unknown };
};

export const constructUrl = (
  baseUrl: string,
  config: ConfigType = {}
): string => {
  const { params = {} } = config;

  const newUrl = baseUrl.replace(/\/:(\w+)/g, (_, value) => {
  const replacedValue = params?.[value] ?? "undefined";
  return "/" + encodeURIComponent(replacedValue);
});

  return newUrl;
};
