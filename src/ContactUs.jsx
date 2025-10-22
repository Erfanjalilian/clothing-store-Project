import { Box, Typography, Paper, Divider, Link, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";

function ContactUs() {
  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Navbar />

      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        {/* مسیر صفحه */}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 2 }}
        >
          خانه / ارتباط با ما
        </Typography>

        {/* عنوان اصلی */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "text.primary",
            borderBottom: "3px solid #ff9800",
            display: "inline-block",
            pb: 1,
          }}
        >
          ارتباط با ما
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={4}>
            {/* بخش سمت راست - اطلاعات تماس */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                تلفن‌ها
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                1234 888 021 — رایگان در ایران
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
                1252 888 021
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                فروشگاه ما
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>آدرس:</strong>{" "}
                <Typography component="span" color="text.secondary">
                  تهران، جنب تئاتر پارک وی، نمای کوهستان، روبروی بانک کارآفرین ملت
                </Typography>
              </Typography>

              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>ساعات فروشگاه:</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                همه‌روزه 10:00 صبح تا 9:00 شب
              </Typography>
            </Grid>

            {/* بخش سمت چپ - پشتیبانی آنلاین */}
            <Grid item xs={12} md={7}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                خرید آنلاین
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                در حال پردازش سفارشات
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                8:00 صبح تا 9:00 شب
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                سفارش‌های خارج از این بازه زمانی در روز کاری بعدی پردازش می‌شوند.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                بخش فروش
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                برای سؤالات کلی درباره سفارش خود لطفاً با ما در ارتباط باشید:
              </Typography>
              <Link
                href="mailto:sales@example.com"
                sx={{
                  color: "primary.main",
                  fontWeight: 500,
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                sales@example.com
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default ContactUs;
