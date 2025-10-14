import {
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Drawer,
  Divider,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);


const menuItems=[
  {
    id:"1",
    title:"سوالات متداول",
    link:"/"
  },
  {
    id:"2",
    title:"نحوه ی ارسال",
    link:"/"
  },
  {
    id:"3",
    title:"نحوه ی پرداخت",
    link:"/"
  },
  {
    id:"4",
    title:"بازگشت"
  },
  {
    id:"5",
    title:"ارتباط با ما",
    link:"/"
  }
]

  const categoryItems=[
    {
      id:"1",
      title:"لباس زنانه",
      link:"/"
    },
    {
      id:"2",
      title:"لباس مردانه",
      link:"/"
    },
    {
      id:"3",
      title:"برندها",
      link:"/"
    },
    {
      id:"4",
      title: "فروش ویژه",
      link:"/"
    },
    {
      id:"5",
      title:"تازه رسیده‌ها",
      link:"/NewArrivals"
    }
  ]

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
          <Typography
            key={item}
            sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
          >
            {item.title}
          </Typography>
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
          <InputBase
            fullWidth
            placeholder="جست‌وجوی محصول..."
            sx={{ fontSize: "0.95rem" }}
          />
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
        }}
      >
        {categoryItems.map((text) => (
          <Link style={{
            color:"black",
            textDecoration:"none"
          }} to={text.link}>
          <Typography
            key={text}
            sx={{
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": { color: "red", transform: "translateY(-2px)" },
            }}
          >
            
                 {text.title}
           
            
          </Typography>
           </Link>
        ))}
      </Box>

     
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            منو
          </Typography>
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text} onClick={toggleDrawer(false)}>
                {text.title}
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 3 }}>
            دسته‌بندی
          </Typography>
          <List>
            {categoryItems.map((text) => (
              <ListItem button key={text} onClick={toggleDrawer(false)}>
                {text.title}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
