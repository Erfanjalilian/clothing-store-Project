import { Box,Container,Typography} from "@mui/material";
import { useEffect,useState } from "react";
function MenClothes(){
    const[typeProduct,setTypeProduct]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const result=await fetch("http://localhost:3000/product")
            const data=await result.json()
            const a=data.filter(item=>item.Category=="لباس مردانه")
            const b=a.map(item=>item.type)
            const finalData=[...new Set(b)]
            setTypeProduct(finalData)
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
                    typeProduct.length===0||typeProduct===null?
                    <Typography variant="h5">درحال بارگیری...</Typography>:
                    <Box sx={{
                        display:"flex",
                        gap:2,
                        flexWrap:"wrap"
                    }}>
                        {
                            typeProduct.map((item)=>(
                                <Box key={item} sx={{
                                    width:"100%"
                                }}>{item}</Box>
                            ))
                        }
                    </Box>
                }
            </Container>
        </Box>
    )
}
export default MenClothes;