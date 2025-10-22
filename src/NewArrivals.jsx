import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";

function NewArrivals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:3000/NewArrivals");
      const final = await result.json();
      setData(final);
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", direction: "rtl" }}>
      <Navbar />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {data == null || data.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            در حال دریافت اطلاعات...
          </Box>
        ) : (
          <>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 1,
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
              }}
            >
              خانه / تازه رسیده‌ها
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.3rem", sm: "1.6rem" },
              }}
            >
              تازه رسیده‌ها
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: { xs: "flex-start", sm: "flex-start" },
              }}
            >
              {data.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "40%", sm: "30%", md: "18%" },
                    bgcolor: "background.paper",
                    borderRadius: 3,
                    p: 2,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.ImageAdress}
                    alt={item.ProductName}
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 0.5,
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                    }}
                  >
                    {item.brand}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {item.ProductName}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: "#212529",
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {item.ProductPrice} تومان
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default NewArrivals;
