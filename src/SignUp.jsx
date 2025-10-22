import { Box, Paper, Typography, TextField, Button, Divider, Link } from "@mui/material";
import Navbar from "./Components/Navbar";

function SignUp() {
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
            width: "450px",
            borderRadius: 3,
            textAlign: "center",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            ثبت‌نام در سایت
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            لطفاً اطلاعات خود را برای ایجاد حساب کاربری وارد کنید
          </Typography>

          <Box component="form" sx={{ textAlign: "right" }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              نام و نام خانوادگی
            </Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="مثلاً: علی رضایی"
              sx={{ mb: 3 }}
            />

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

            <Typography variant="body2" sx={{ mb: 1 }}>
              تکرار رمز عبور
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
                mb: 3,
              }}
            >
              ثبت‌نام
            </Button>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              حساب کاربری دارید؟{" "}
              <Link href="#" underline="hover" sx={{ color: "primary.main" }}>
                وارد شوید
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default SignUp;
