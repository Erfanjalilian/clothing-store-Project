import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import "swiper/css/bundle";

function RtlSwiper() {
  const slides = [
    {
      id: 1,
      image: "https://vip-themes.com/impreza/15/wp-content/uploads/2020/11/pedram-normohamadian-cpsYx4TYBhg-unsplash-1024x502.jpg",
      title: "فروش ویژه لباس‌های پاییزی",
      buttonText: "مشاهده محصولات",
    },
    {
      id: 2,
      image: "https://vip-themes.com/impreza/15/wp-content/uploads/2020/11/tarutoa-maF40pANiRY-unsplash-1024x337.jpg",
      title: "تخفیف‌های شگفت‌انگیز امروز",
      buttonText: "خرید کن",
    },
    {
      id: 3,
      image: "https://vip-themes.com/impreza/15/wp-content/uploads/2020/11/reinhart-julian-VleZz-ItaRI-unsplash-1024x340.jpg",
      title: "جدیدترین مدل‌های کفش ورزشی",
      buttonText: "دیدن جزئیات",
    },
  ];

 
  useEffect(() => {
    document.dir = "rtl";
  }, []);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        dir="rtl"
        spaceBetween={30}
        slidesPerView={1}
        style={{ direction: "rtl" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 250, sm: 400, md: 500 },
              }}
            >
            
              <Box
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />

              
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "10%",
                  transform: "translateY(-50%)",
                  color: "white",
                  textAlign: "right",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.title}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#333",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  {slide.buttonText}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

     
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: white !important;
            width: 45px;
            height: 45px;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 24px;
            font-weight: bold;
          }

          /* موقعیت نقاط زیر اسلایدر */
          .swiper-pagination {
            bottom: 15px !important;
          }

          /* رنگ نقطه‌های غیرفعال */
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
          }

          /* رنگ نقطه فعال */
          .swiper-pagination-bullet-active {
            background: white !important;
            transform: scale(1.3);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </Box>
  );
}

export default RtlSwiper;
