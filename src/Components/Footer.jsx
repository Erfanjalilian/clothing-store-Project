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
        {/* بخش بالا (آیکون‌ها و توضیحات کوتاه) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            textAlign: { xs: "center", md: "right" },
          }}
        >
          {[
            {
              icon: <ChatIcon sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 }, color: "orangered" }} />,
              title: "مشاوره خرید",
              text: "تیم مدیران فروش و متخصصان ما خوشحال خواهند شد که به شما در یافتن محصولات و پیشنهادات مناسب کمک کنند",
            },
            {
              icon: (
                <LocalShippingIcon
                  sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 }, color: "orangered" }}
                />
              ),
              title: "حمل و نقل و پرداخت",
              text: "ما پرداخت‌ها را از طریق سیستم‌های پرداخت آنلاین، کارت‌های اعتباری و حواله‌های بانکی می‌پذیریم",
            },
            {
              icon: (
                <UnsubscribeIcon
                  sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 }, color: "orangered" }}
                />
              ),
              title: "خبرنامه",
              text: "اولین کسی باشید که از فروش‌های آینده، مجموعه‌های جدید و پیشنهادات ویژه مطلع می‌شود",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "80%", md: "30%" },
                mt: { xs: 4, md: 8 },
                px: { xs: 1, sm: 2 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Box>
              <Typography
                sx={{
                  color: "black",
                  mt: 1.5,
                  fontWeight: 600,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
                variant="h6"
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  mt: 1.2,
                  color: "gray",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  lineHeight: 1.7,
                }}
                variant="body1"
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* بخش لینک‌ها */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            mt: { xs: 5, md: 10 },
            textAlign: { xs: "center", md: "right" },
          }}
        >
          {[
            {
              title: "کاتالوگ",
              items: ["لباس زنانه", "لباس مردانه", "برندها", "فروش ویژه", "تازه رسیده‌ها"],
            },
            {
              title: "اطلاعات",
              items: ["سوالات متداول", "نحوه ارسال", "نحوه پرداخت", "بازگشت"],
            },
            {
              title: "درباره ما",
              items: ["درباره فروشگاه", "ارتباط با ما", "شرایط استفاده"],
            },
            {
              title: "ارتباط با ما",
              items: [
                "تهران، جنب تئاتر پارک وی، نمای کوهستان روبروی بانک کارآفرین ملت",
                "همه روزه از ساعت ۸ صبح تا ۹ شب",
                "۰۲۱ - ۷۷۷ ۸۸۸۸",
              ],
            },
          ].map((section, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", sm: "45%", md: "22%" },
                mb: { xs: 3, md: 4 },
              }}
            >
              <List>
                <ListItem
                  sx={{
                    color: "black",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight: 600,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  {section.title}
                </ListItem>
                {section.items.map((item, j) => (
                  <ListItem
                    key={j}
                    sx={{
                      color: "gray",
                      fontSize: { xs: "0.85rem", md: "0.95rem" },
                      lineHeight: 1.6,
                      "&:hover": { color: "black" },
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Container>

      {/* کپی‌رایت */}
      <Typography
        sx={{
          color: "gray",
          textAlign: "center",
          mt: { xs: 3, md: 6 },
          pb: { xs: 4, md: 6 },
          fontSize: { xs: "0.8rem", md: "0.9rem" },
          px: 2,
        }}
        variant="body2"
      >
        این سایت توسط عرفان جلیلیان طراحی شده است
      </Typography>
    </Box>
  );
}

export default Footer;
