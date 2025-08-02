"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { slideUp } from "../(dashboard)/components/dashboard-header";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
export default function Page() {
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (e: React.FormEvent) => {};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #f5f7fa 50%, #bbdefb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ animation: `${slideUp} 0.6s ease-out forwards` }}
      >
        <Card sx={{ overflow: "visible" }}>
          <CardHeader
            title={
              <Box sx={{ textAlign: "center", py: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1d57b0, #1d57a0)",
                    }}
                  >
                    <DescriptionIcon sx={{ color: "white", fontSize: 32 }} />
                  </Box>
                </Box>
                <Typography variant="h5" component="h1" fontWeight={700}>
                  Welcome Back
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  Sign in to access your meeting minutes library
                </Typography>
              </Box>
            }
          />

          <CardContent>
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
              <Controller
                name="email"
                control={form.control}
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" fontWeight={500} mb={1}>
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      {...field}
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Box>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field }) => (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" fontWeight={500} mb={1}>
                      Password
                    </Typography>
                    <TextField
                      fullWidth
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              sx={{ color: "text.secondary" }}
                            >
                              {showPassword ? (
                                <RemoveRedEyeIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                )}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  Sign In
                  <ArrowBackIcon fontSize="small" />
                </Box>
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Don&apos;t have an account?{" "}
                <Button
                  variant="text"
                  href="/register"
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    p: 0,
                    minWidth: "auto",
                    "&:hover": {
                      color: "primary.dark",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Sign up here
                </Button>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
