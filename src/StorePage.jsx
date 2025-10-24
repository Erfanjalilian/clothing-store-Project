import { Box,Typography } from "@mui/material";
import { useEffect,useState,useContext } from "react";
import {dataStore} from './context/Store'
import Navbar from "./Components/Navbar";
function StorePage(){
    const{data}=useContext(dataStore)
    const[Product,setProduct]=useState()
    useEffect(()=>{
        async function handelData(){
            const result=await fetch("http://localhost:3000/product")
            const theData=await result.json()
            const finalData=theData.filter((item)=>item.type==data)
            setProduct(finalData)
        }
        handelData()
    },[])
    return(
        <Box>
            <Navbar />
            <Box sx={{
                width:"90%",
                height:"auto",
                marginLeft:"auto",
                marginRight:"auto"
            }}>
                {
                    Product==null||Product==undefined?
                    <Typography sx={{
                        textAlign:"center"
                    }}>درحال بارگیری دیتا...</Typography>:

                    <Box sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        flexWrap:"wrap"
                    }}>
                        {
                            Product.map((item)=>(
                                 <Box sx={{
                            width:"30%"
                        }}>
                            <img style={{
                                width:"100%",
                                height:"300px"
                            }} src={item.ImageAdress} />
                        </Box>
                            ))
                        }
                       
                    </Box>
                }
            </Box>
        </Box>
    )
}
export default StorePage;