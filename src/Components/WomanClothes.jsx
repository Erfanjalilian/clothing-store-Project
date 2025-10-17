import { Box,Typography,Container } from "@mui/material"
import { useEffect,useState } from "react";
function WomanClothes(){
      const[typeProducte,setTypeProducte]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const result=await fetch("http://localhost:3000/product")
            const data=await result.json()
            const a=data.filter(item=>item.Category=="لباس زنانه")
            const b=a.map(item=>item.type)
            const finalData=[...new Set(b)]
            setTypeProducte(finalData)
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
                    !typeProducte || typeProducte.length === 0?
                    <Typography variant="h5">درحال بارگیری...</Typography>:
                    <Box sx={{
                        display:"flex",
                        gap:2,
                        flexWrap:"wrap"
                    }}>
                        {
                            typeProducte.map((item)=>(
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
export default WomanClothes