import { Box, Typography, List, ListItem, Paper, Divider } from "@mui/material";
import Navbar from "./Components/Navbar";

function PaymentMethod() {
  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", direction: "rtl" }}>
      <Navbar />

      <Box
        sx={{
          width: "85%",
         
          mx: "auto",
          py: 5,
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          خانه / نحوه پرداخت
        </Typography>

        <Paper elevation={0} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            نحوه پرداخت
          </Typography>

          <Typography variant="h6" sx={{ mb: 1 }}>
            پرداخت در فروشگاه
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            در فروشگاه و بخش‌های آن، روش‌های پرداخت زیر را می‌پذیریم:
          </Typography>

          <List sx={{ listStyleType: "disc", pl: 3 }}>
            <ListItem sx={{ display: "list-item", py: 0.5,textAlign:"right" }}>نقد</ListItem>
            <ListItem sx={{ display: "list-item", py: 0.5,textAlign:"right" }}>سیستم های پرداخت</ListItem>
            <ListItem sx={{ display: "list-item", py: 0.5,textAlign:"right" }}>کارت بانکی</ListItem>
            <ListItem sx={{ display: "list-item", py: 0.5,textAlign:"right" }}>
              ترکیبی – هنگام پرداخت برای کالا، می‌توانید چندین روش را برای تقسیم مبلغ چک ترکیب کنید.
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            سفارش آنلاین
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">نقد هنگام تحویل</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              هنگام اتمام سفارش، روش “در هنگام تحویل” را مشخص کنید. به این ترتیب پرداخت توسط پیک پس از
              دریافت و پذیرش کالا(ها) انجام می شود.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">کارت اعتباری هنگام تحویل</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              هنگام اتمام سفارش، روش پرداخت “از طریق کارت به پیک” را مشخص کنید. پیک با پایانه پرداخت وارد
              می شود.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">پرداخت آنلاین</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              هنگام اتمام سفارش، روش پرداخت “پرداخت آنلاین” را مشخص کنید. مدیر فروش ما برای توافق در مورد
              لیست کالاها و شرایط تحویل با شما تماس خواهد گرفت.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="h6">برای شرکت ها</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              برای تشکیل و دریافت فاکتور برای حساب شرکت مشخص شده، روش پرداخت «حواله بانکی» را انتخاب کنید.
              مدیر فروش ما برای تأیید فهرست اقلام و شرایط تحویل با شما تماس خواهد گرفت و یک نسخه از فاکتور را
              از طریق ایمیل برای شما ارسال می کند.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default PaymentMethod;
