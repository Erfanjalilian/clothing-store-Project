import { Box, Container, Typography, List, ListItem } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f2f3ff",
        mt: "50px",
        pt: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            textAlign: { xs: "center", md: "right" },
          }}
        >
          {[ 
            {
              icon: <ChatIcon sx={{ width: 50, height: 50, color: "orangered" }} />,
              title: "مشاوره خرید",
              text: "تیم مدیران فروش و متخصصان ما خوشحال خواهند شد که به شما در یافتن محصولات و پیشنهادات مناسب کمک کنند",
            },
            {
              icon: (
                <LocalShippingIcon
                  sx={{ width: 50, height: 50, color: "orangered" }}
                />
              ),
              title: "حمل و نقل و پرداخت",
              text: "ما پرداخت‌ها را از طریق سیستم‌های پرداخت آنلاین، کارت‌های اعتباری و حواله‌های بانکی می‌پذیریم",
            },
            {
              icon: (
                <UnsubscribeIcon
                  sx={{ width: 50, height: 50, color: "orangered" }}
                />
              ),
              title: "خبرنامه",
              text: "اولین کسی باشید که از فروش‌های آینده، مجموعه‌های جدید و پیشنهادات ویژه مطلع می‌شود",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" },
                mt: { xs: 4, md: 8 },
                px: { xs: 1, sm: 2 },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                {item.icon}
              </Box>
              <Typography sx={{ color: "gray", mt: 1 }} variant="h6">
                {item.title}
              </Typography>
              <Typography
                sx={{
                  mt: 1.5,
                  color: "gray",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
                variant="body1"
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            mt: { xs: 6, md: 10 },
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "45%", md: "20%" }, mb: 4 }}>
            <List>
              <ListItem sx={{ color: "black", fontSize: "20px", fontWeight: 600 }}>
                کاتالوگ
              </ListItem>
              {["لباس زنانه", "لباس مردانه", "برندها", "فروش ویژه", "تازه رسیده‌ها"].map(
                (item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      color: "gray",
                      fontSize: "0.95rem",
                      "&:hover": { color: "black" },
                    }}
                  >
                    {item}
                  </ListItem>
                )
              )}
            </List>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "45%", md: "20%" }, mb: 4 }}>
            <List>
              <ListItem sx={{ color: "black", fontSize: "20px", fontWeight: 600 }}>
                اطلاعات
              </ListItem>
              {["سوالات متداول", "نحوه ارسال", "نحوه پرداخت", "بازگشت"].map((item, i) => (
                <ListItem
                  key={i}
                  sx={{
                    color: "gray",
                    fontSize: "0.95rem",
                    "&:hover": { color: "black" },
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "45%", md: "20%" }, mb: 4 }}>
            <List>
              <ListItem sx={{ color: "black", fontSize: "20px", fontWeight: 600 }}>
                درباره ما
              </ListItem>
              {["درباره فروشگاه", "ارتباط با ما", "شرایط استفاده"].map((item, i) => (
                <ListItem
                  key={i}
                  sx={{
                    color: "gray",
                    fontSize: "0.95rem",
                    "&:hover": { color: "black" },
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* ستون 4 */}
          <Box sx={{ width: { xs: "100%", sm: "45%", md: "20%" }, mb: 4 }}>
            <List>
              <ListItem sx={{ color: "black", fontSize: "20px", fontWeight: 600 }}>
                ارتباط با ما
              </ListItem>
              <ListItem sx={{ color: "gray", lineHeight: 1.7 }}>
                تهران، جنب تئاتر پارک وی، نمای کوهستان روبروی بانک کارآفرین ملت
              </ListItem>
              <ListItem sx={{ color: "gray" }}>همه روزه از ساعت ۸ صبح تا ۹ شب</ListItem>
              <ListItem sx={{ color: "gray", fontWeight: 500 }}>۰۲۱ - ۷۷۷ ۸۸۸۸</ListItem>
            </List>
          </Box>
        </Box>
      </Container>

      
      <Typography
        sx={{
          color: "gray",
          textAlign: "center",
          mt: { xs: 4, md: 8 },
          pb: { xs: 4, md: 6 },
          fontSize: "0.9rem",
        }}
        variant="body2"
      >
         این سایت توسط عرفان جلیلیان طراحی شده است
      </Typography>
    </Box>
  );
}

export default Footer;
