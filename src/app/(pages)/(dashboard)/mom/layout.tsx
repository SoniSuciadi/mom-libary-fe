import { Stack } from "@mui/material";
import HeaderMom from "./components/header-mom";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack>
      <HeaderMom />
      {children}
    </Stack>
  );
}
