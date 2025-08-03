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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import useMutationApiRequest from "@/hooks/useApiRequest/useMutationApiRequest";
import { SnackBarResultController } from "@/components/snackbar-custom";
import { slideUp } from "../animate";
import { registerSchema } from "./config";

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",

      password: "",
      confirmPassword: "",
    },
  });

  const { mutateAsync } = useMutationApiRequest({
    key: "register",
  });
  const onSubmit = async () => {
    try {
      await mutateAsync({
        name: form.getValues("name"),
        email: form.getValues("email"),
        password: form.getValues("password"),
      });
      SnackBarResultController.open({
        variant: "success",
        content: "Registrasi berhasil silahkan login",
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
      SnackBarResultController.open({
        variant: "error",
        content: "Registrasi gagal silahkan coba lagi",
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #f5f7fa 50%, #bbdefb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ animation: `${slideUp} 0.6s ease-out forwards` }}
      >
        <Card
          sx={{
            overflow: "visible",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          }}
        >
          <CardHeader
            title={
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 1,
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
                  Create Your Account
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                  Start managing your meeting minutes efficiently
                </Typography>
              </Box>
            }
          />

          <CardContent>
            <Controller
              name="name"
              control={form.control}
              render={({ field }) => (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" fontWeight={500} mb={1}>
                    Full Name
                  </Typography>
                  <TextField fullWidth placeholder="Soni suciadi" {...field} />
                </Box>
              )}
            />
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
                    <Typography
                      component="span"
                      variant="caption"
                      color="text.secondary"
                      ml={1}
                    >
                      (min 8 characters)
                    </Typography>
                  </Typography>
                  <TextField
                    fullWidth
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
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
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" fontWeight={500} mb={1}>
                    Confirm Password
                  </Typography>
                  <TextField
                    {...field}
                    fullWidth
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            edge="end"
                            sx={{ color: "text.secondary" }}
                          >
                            {showConfirmPassword ? (
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
              onClick={onSubmit}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                Create Account
                <ArrowForwardIcon fontSize="small" />
              </Box>
            </Button>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{" "}
                <Button
                  variant="text"
                  onClick={() => router.push("/login")}
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
                  Sign in here
                </Button>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
