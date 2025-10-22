
import { Box, Paper, Typography, TextField, Button, Divider, Link } from "@mui/material";
import Navbar from "./Components/Navbar";

function Login() {
  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", direction: "rtl" }}>
      <Navbar />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
            width: "400px",
            borderRadius: 3,
            textAlign: "center",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            ورود به حساب کاربری
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            لطفاً اطلاعات ورود خود را وارد کنید
          </Typography>

          <Box component="form" sx={{ textAlign: "right" }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              ایمیل یا شماره موبایل
            </Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="example@gmail.com"
              sx={{ mb: 3 }}
            />

            <Typography variant="body2" sx={{ mb: 1 }}>
              رمز عبور
            </Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="password"
              placeholder="••••••••"
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#212529",
                "&:hover": { bgcolor: "#343a40" },
                borderRadius: 2,
                py: 1.2,
                mb: 2,
              }}
            >
              ورود
            </Button>

            <Link
              href="#"
              underline="none"
              sx={{
                display: "block",
                color: "text.secondary",
                fontSize: "0.875rem",
                textAlign: "center",
                mb: 3,
              }}
            >
              رمز عبور خود را فراموش کرده‌اید؟
            </Link>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              حساب کاربری ندارید؟{" "}
              <Link href="#" underline="hover" sx={{ color: "primary.main" }}>
                ثبت‌نام کنید
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Login;
