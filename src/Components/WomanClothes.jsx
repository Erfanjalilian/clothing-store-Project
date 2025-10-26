import { Box,Typography,Container } from "@mui/material"
import { useEffect,useState,useContext } from "react";
import {dataStore} from '../context/Store'
import { useNavigate } from "react-router-dom";
function WomanClothes(){
    const{setData}=useContext(dataStore)
      const[typeProducte,setTypeProducte]=useState([])
      const navigate = useNavigate();
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
    
    function handelDataContext(item){
        setData(item)
        navigate("/StorePage");
    }
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
                                }}>
                                    <Typography sx={{
                                        cursor:"pointer"
                                    }} onClick={()=>handelDataContext(item)}>{item}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                }
            </Container>
        </Box>
    )
}
export default WomanClothes