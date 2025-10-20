import {
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Drawer,
  Divider,
  InputBase,
  Container,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import MenClothes from "./MenClothes";
import WomanClothes from "./WomanClothes";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const toggleDrawer = (state) => () => setOpen(state);

  const menuItems = [
    { id: "1", title: "سوالات متداول", link: "/FrequentlyAskedQuestions" },
    { id: "2", title: "نحوه ی ارسال", link: "/HowToSend" },
    { id: "3", title: "نحوه ی پرداخت", link: "/PaymentMethod" },
    { id: "4", title: "بازگشت", link: "/" },
    { id: "5", title: "ارتباط با ما", link: "/ContactUs" },
  ];

  const categoryItems = [
    { id: "1", title: "لباس زنانه", key: "women" },
    { id: "2", title: "لباس مردانه", key: "men" },
    { id: "3", title: "برندها", key: "brand" },
    { id: "4", title: "فروش ویژه", link: "/SpecialSale" },
    { id: "5", title: "تازه رسیده‌ها", link: "/NewArrivals" },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
     
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 3,
          bgcolor: "#f8f8f8",
          py: 1,
          fontSize: "0.9rem",
          color: "gray",
        }}
      >
        {menuItems.map((item) => (
          <Link style={{
            color:"black",
            textDecoration:"none"
          }} to={item.link}>
          <Typography
            key={item.id}
            sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
          >
            {item.title}
          </Typography>
          </Link>
        ))}
      </Box>

      <Divider sx={{ display: { xs: "none", md: "block" } }} />

      
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 6 },
          py: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#222",
            letterSpacing: "-0.5px",
            cursor: "pointer",
          }}
        >
          فشن‌شاپ
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "#f5f5f5",
            borderRadius: "30px",
            px: 2,
            width: "50%",
            height: "45px",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <InputBase fullWidth placeholder="جست‌وجوی محصول..." />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 3,
          }}
        >
          <IconButton>
            <LocalMallOutlinedIcon />
          </IconButton>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Box>

       
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

     
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 4,
          bgcolor: "#fafafa",
          py: 1.5,
          borderTop: "1px solid #eee",
          position: "relative",
        }}
      >
        {categoryItems.map((item) => (
          <Box
            key={item.id}
            onMouseEnter={() => setHoveredMenu(item.key || null)}
            onMouseLeave={() => setHoveredMenu(null)}
            sx={{ position: "relative" }}
          >
            
            <Link style={{
              textDecoration:"none",
              color:"black"
            }} to={item.link}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { color: "red", transform: "translateY(-2px)" },
              }}
            >
              {item.title}
            </Typography>
            </Link>

            
            {hoveredMenu === "brand" && item.key === "brand" && (
              <Box sx={{ position: "absolute", top: "100%",width:"200px" }}>
                <Brand />
              </Box>
            )}
            {hoveredMenu === "women" && item.key === "women" && (
              <Box sx={{ position: "absolute", top: "100%", width:"200px" }}>
                <WomanClothes />
              </Box>
            )}
            {hoveredMenu === "men" && item.key === "men" && (
              <Box sx={{ position: "absolute", top: "100%",width:"200px" }}>
                <MenClothes />
              </Box>
            )}
          </Box>
        ))}
      </Box>

      
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            منو
          </Typography>

        
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} onClick={toggleDrawer(false)}>
                <Link style={{
                  color:"black",
                  textDecoration:"none"
                }} to={item.link}>
                {item.title}
                </Link>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 3 }}>
            دسته‌بندی‌ها
          </Typography>

         
          <List>
            {categoryItems.map((item) => (
              <Box key={item.id}>
                <ListItem
                  button
                  onClick={() =>
                    item.key
                      ? setOpenMobileMenu(
                          openMobileMenu === item.key ? null : item.key
                        )
                      : null
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Link style={{
                    textDecoration:"none",
                    color:"black"
                  }} to={item.link}>
                  {item.title}
                  </Link>
                  {item.key && (
                    <>
                      {openMobileMenu === item.key ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </>
                  )}
                </ListItem>

                <Collapse
                  in={openMobileMenu === item.key}
                  timeout="auto"
                  unmountOnExit
                >
                  {item.key === "brand" && <Brand />}
                  {item.key === "women" && <WomanClothes />}
                  {item.key === "men" && <MenClothes />}
                </Collapse>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
