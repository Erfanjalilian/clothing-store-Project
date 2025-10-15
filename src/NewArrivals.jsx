import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";

function NewArrivals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fechData() {
      const result = await fetch("http://localhost:3000/NewArrivals");
      const final = await result.json();
      setData(final);
    }
    fechData();
  }, []);

  return (
    <Box>
      <Container>
        <Navbar />
      </Container>

      {data == null || data.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 5 }}>در حال دریافت اطلاعات...</Box>
      ) : (
        <Box>
          <Container>
            <Typography
              sx={{ color: "gray", marginTop: "50px" }}
              variant="body2"
            >
              خانه / تازه رسیده ها
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
              تازه رسیده ها
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {data.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: {
                      xs: "48%",
                      sm: "30%",
                      md: "18%",
                    },
                    mt: 2,
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                    src={item.ImageAdress}
                    alt={item.ProductName}
                  />
                  <Typography sx={{ color: "gray", mt: 1 }} variant="body2">
                    {item.brand}
                  </Typography>
                  <Typography variant="body1">{item.ProductName}</Typography>
                  <Typography variant="body1">{item.ProductPrice}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default NewArrivals;
