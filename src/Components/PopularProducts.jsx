import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function PopularProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:3000/product");
      const theResult = await result.json();
      setData(theResult);
    }
    fetchData();
  }, []);

  if (!data || data.length === 0) {
    return (
      <Typography
        sx={{
          textAlign: "center",
          mt: "20px",
        }}
        variant="body1"
      >
        در حال بارگیری دیتا ....
      </Typography>
    );
  }

  data.sort((a, b) => b.popularityScore - a.popularityScore);
  const PopData = data.slice(0, 10);

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 4,
        }}
        variant="h4"
      >
        محصولات محبوب
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center" },
          gap: { xs: 2, sm: 2, md: 5 },
        }}
      >
        {PopData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "48%",
                sm: "48%",
                md: "23%",
                lg: "19%",
              },
              bgcolor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                height: 250,
              }}
            >
              <img
                src={item.ImageAdress}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: "0.85rem",
                  mb: 0.5,
                }}
              >
                {item.brand}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {item.name}
              </Typography>

              {item.discount === "" ? (
                <Typography sx={{ color: "#333", fontWeight: 500 }}>
                  {item.price} تومان
                </Typography>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      textDecoration: "line-through",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.price} تومان
                  </Typography>
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: 600,
                    }}
                  >
                    {item.discount} تومان
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PopularProducts;
