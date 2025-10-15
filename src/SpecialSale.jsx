import { Box,Typography,Container } from "@mui/material";
import { useEffect,useState } from "react";
import Navbar from "./Components/Navbar";
function SpecialSale(){
    const[data,setData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const result=await fetch("http://localhost:3000/spacialSale")
            const mocData=await result.json();
            setData(mocData)
        }
        fetchData()
    },[])
    return(
        <Box>
            <Navbar />
            <Container>
                 <Typography sx={{
                    color:"gray",
                    marginTop:"50px",
                    marginBottom:"20px"
                 }} variant="body2">خانه/فروش ویژه</Typography>
                 <Typography variant="h5">فروش ویژه</Typography>
                 {
                    data.length==0 || data==null?
                    <Typography>درحال بارگیری محصولات ....</Typography>:
                    <Box sx={{
                        display:"flex",
                       
                        flexWrap:"wrap",
                        gap:2
                     
                    }}>
                        {
                            data.map((item)=>(
                                <Box key={item.id} sx={{
                                    
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
                        
                                }}>
                                    <img style={{
                                          width: "100%",
                                           height: "400px",
                                          objectFit: "cover",
                                        borderRadius: "12px",
                                    }} src={item.ProductAddresImage} />
                                    <Typography sx={{
                                        color:"gray"
                                    }} variant="body2">{item.ProductBrand}</Typography>
                                    <Typography sx={{ color: "gray", mt: 1 }} variant="body2"></Typography>
                                    <Typography variant="body1">{item.ProductName}</Typography>
                                    {
                                        item.discount==""?<Typography>{item.ProductPrice} تومان</Typography>:
                                        <Box>
                                            <Typography variant="body1" sx={{
                                                textDecoration: "line-through",
                                                display:"inline",
                                                margin:"5px"
                                            }}>{item.ProductPrice} تومان</Typography>
                                            <Typography variant="body1" sx={{
                                                color:"orange",
                                                display:"inline"
                                            }}>{item.discount} تومان</Typography>
                                        </Box>
                                    }
                                    
                                    
                                </Box>
                            ))
                        }
                    </Box>
                 }
            </Container>
           
        </Box>
    )
}
export default SpecialSale;