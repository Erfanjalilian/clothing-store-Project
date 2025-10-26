import * as React from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Checkbox,
  Button,
  Drawer,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { dataStore } from "../context/Store";
import Navbar from "../Components/Navbar";

function StorePage() {
  const { data } = useContext(dataStore);
  const [product, setProduct] = useState(null);
  const [sort, setSort] = useState("");
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedSizes, setCheckedSizes] = useState([]);

  const [openFilter, setOpenFilter] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("http://localhost:3000/product");
        const theData = await result.json();
        const finalData = theData.filter((item) => item.type === data);
        setProduct(finalData);
      } catch (error) {
        console.error("خطا در واکشی داده‌ها:", error);
      }
    }
    fetchData();
  }, [data]);

  const handleSortChange = (event) => setSort(event.target.value);

  const toggleCheck = (prevState, setState, value) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredProducts =
    product?.filter((item) => {
      const brandOk =
        checkedBrands.length === 0 || checkedBrands.includes(item.brand);
      const colorOk =
        checkedColors.length === 0 || checkedColors.includes(item.colorDefult);
      const sizeOk =
        checkedSizes.length === 0 || checkedSizes.includes(item.size);
      return brandOk && colorOk && sizeOk;
    }) || [];

  
  const productCardStyle = {
    width: isMobile ? "45%" : "23%",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
      transform: "translateY(-4px)",
    },
  };

  
  const filterSection = (
    <Box sx={{ width: "280px", p: 2 }}>
      {/* برند */}
      <Typography sx={{ mb: 1, fontWeight: "bold" }}>برند</Typography>
      {!product ? (
        <Typography>در حال بارگیری...</Typography>
      ) : (
        <Box>
          {[...new Set(product.map((item) => item.brand))].map((brand) => (
            <Box
              key={brand}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>{brand}</Typography>
              <Checkbox
                checked={checkedBrands.includes(brand)}
                onChange={() =>
                  toggleCheck(checkedBrands, setCheckedBrands, brand)
                }
              />
            </Box>
          ))}
        </Box>
      )}

      
      <Typography sx={{ mt: 3, mb: 1, fontWeight: "bold" }}>رنگ</Typography>
      {!product ? (
        <Typography>در حال بارگیری...</Typography>
      ) : (
        <Box>
          {[...new Set(product.map((item) => item.colorDefult))].map(
            (colorDefult) => (
              <Box
                key={colorDefult}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>{colorDefult}</Typography>
                <Checkbox
                  checked={checkedColors.includes(colorDefult)}
                  onChange={() =>
                    toggleCheck(checkedColors, setCheckedColors, colorDefult)
                  }
                />
              </Box>
            )
          )}
        </Box>
      )}

      
      <Typography sx={{ mt: 3, mb: 1, fontWeight: "bold" }}>
        محدوده قیمت
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: "8px",
          boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)",
        }}
      >
        <TextField
          label="حداقل قیمت (تومان)"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          fullWidth
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
        />
        <TextField
          label="حداکثر قیمت (تومان)"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          fullWidth
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#fff",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e0e0e0",
            color: "#333",
            fontWeight: "bold",
            mt: 1,
            "&:hover": { backgroundColor: "#cfcfcf" },
          }}
        >
          اعمال فیلتر قیمت
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ width: "90%", margin: "60px auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "30px",
          }}
        >
         
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {!product
                  ? "درحال بارگیری اطلاعات..."
                  : product.length === 0
                  ? "محصولی یافت نشد"
                  : product[0]?.type}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {isMobile && (
                  <Button
                    variant="contained"
                    onClick={() => setOpenFilter(true)}
                    sx={{
                      backgroundColor: "#e0e0e0",
                      color: "#333",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#cfcfcf" },
                    }}
                  >
                    فیلتر محصولات
                  </Button>
                )}
                <FormControl
                  sx={{
                    minWidth: 200,
                    direction: "rtl",
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  }}
                >
                  <InputLabel id="sort-select-label">
                    طبقه بندی بر اساس
                  </InputLabel>
                  <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    value={sort}
                    label="طبقه بندی بر اساس"
                    onChange={handleSortChange}
                    sx={{ textAlign: "right" }}
                  >
                    <MenuItem value={10}>محبوب‌ترین محصولات</MenuItem>
                    <MenuItem value={20}>جدیدترین محصولات</MenuItem>
                    <MenuItem value={30}>ارزان‌ترین محصولات</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            
            {!product ? (
              <Typography>در حال بارگیری دیتا...</Typography>
            ) : filteredProducts.length === 0 ? (
              <Typography>محصولی با این فیلترها یافت نشد</Typography>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: isMobile ? "space-between" : "flex-start",
                }}
              >
                {filteredProducts.map((item) => (
                  <Box key={item.id} sx={productCardStyle}>
                    <img
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                      src={item.ImageAdress}
                      alt={item.name}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography sx={{ color: "gray" }} variant="body2">
                        {item.brand}
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        {item.name}
                      </Typography>

                      {item.discount ? (
                        <Box>
                          <Typography
                            sx={{
                              textDecorationLine: "line-through",
                              color: "red",
                              fontSize: "14px",
                            }}
                          >
                            {item.price} تومان
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {item.discount} تومان
                          </Typography>
                        </Box>
                      ) : (
                        <Typography variant="body1">
                          {item.price} تومان
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          
          {!isMobile && (
            <Box
              sx={{
                width: "280px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                p: 2,
                height: "fit-content",
              }}
            >
              {filterSection}
            </Box>
          )}
        </Box>

        
        <Drawer
          anchor="right"
          open={openFilter}
          onClose={() => setOpenFilter(false)}
        >
          {filterSection}
        </Drawer>
      </Box>
    </Box>
  );
}

export default StorePage;
