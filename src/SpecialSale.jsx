import { Box, Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

function SpecialSale() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:3000/spacialSale");
      const mocData = await result.json();
      setData(mocData);
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", direction: "rtl" }}>
      <Navbar />

      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Typography
          sx={{
            color: "text.secondary",
            mb: 1,
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
          }}
          variant="body2"
        >
          خانه / فروش ویژه
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 3,
            fontSize: { xs: "1.3rem", sm: "1.6rem" },
          }}
        >
          فروش ویژه
        </Typography>

        {data.length === 0 || data == null ? (
          <Typography sx={{ color: "gray", mt: 3 }}>
            در حال بارگیری محصولات ...
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: { xs: "lex-start", sm: "flex-start" },
            }}
          >
            {data.map((item) => (
              <Box
                key={item.id}
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
                  src={item.ProductAddresImage}
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
                  {item.ProductBrand}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {item.ProductName}
                </Typography>

                {item.discount === "" ? (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#212529",
                      fontWeight: 600,
                      mt: 0.5,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {item.ProductPrice} تومان
                  </Typography>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 0.5,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "gray",
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      }}
                    >
                      {item.ProductPrice} تومان
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "orangered",
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                    >
                      {item.discount} تومان
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default SpecialSale;
