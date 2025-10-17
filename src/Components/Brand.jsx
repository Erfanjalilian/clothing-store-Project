import { Box,Container,Typography,List,ListItem } from "@mui/material";
import { useEffect,useState } from "react";
function Brand(){
    const[brandData,setBrandData]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const result=await fetch("http://localhost:3000/product")
            const data=await result.json()
            const brands=data.map(item=>item.brand)
            const handelBrands=[...new Set(brands)]
            setBrandData(handelBrands)
        }
        fetchData()
    },[])
    
    return(
        <Box sx={{
            position:"absolute",
            zIndex:10,
            backgroundColor:"white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            borderRadius:"5px",
            paddingTop:"20px",
            paddingBottom:"20px"
        }}>
            <Container maxWidth="sm">
                {
                    brandData.length==0||brandData==null?
                    <Typography variant="h5">درحال بارگیری...</Typography>:
                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        flexWrap:"wrap"
                    }}>
                        {
                            brandData.map((item)=>(
                                <Box sx={{
                                    width:"100%",
                                    marginTop:"10px"
                                }}>{item}</Box>
                            ))
                        }
                    </Box>
                }
            </Container>
        </Box>
    )
}
export default Brand;