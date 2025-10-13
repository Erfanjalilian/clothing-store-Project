import { Box,Typography } from "@mui/material";
import { useEffect,useState } from "react";
function SeasonalCollections(){
    const[theData,setTheData]=useState([])
    useEffect(()=>{
           async function fechData(){
            const result=await fetch("http://localhost:3000/SeasonalCollections")
            const data=await result.json();
           
            setTheData(data)
        }
        fechData()
    },[])
    return(
        <Box>
            <Typography sx={{
                textAlign:"center",
                marginTop:"30px",
                marginBottom:"30px"
            }} variant="h5">مجموعه های فصلی</Typography>
            {
                theData==[]?<Typography variant="h5">درحال بارگیری</Typography>:
                <Box 
                sx={{
                     display:{md:"flex",lg:"flex",sm:"block"},
                    justifyContent:"space-between"
                }}
                >
                    {
                        theData.map((item)=>(
                            <Box sx={{
                                width:{md:"30%",lg:"30%",sm:"100%"},
                                overflow:"hidden",
                                 "& img": {
      width: "100%",
      height: "400px",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    "&:hover img": {
      transform: "scale(1.1)",
    },
                            }} key={item.id}>
                                <img style={{
                                    objectFit:"cover",
                                    transition:"transform 0.5s ease",
                                    width:"100%",
                                    height:"400px",
                                    
                                }} src={item.ImageAddres} />
                                <Typography sx={{
                                    position:"relative",
                                    bottom:"60px",
                                    textAlign:"center",
                                    zIndex:"10",
                                    fontWeight:400,
                                    color:"white",
                                    fontSize:"30px",
                                    backgroundColor:"rgba(0,0,0,0.3)"
                                }} variant="body1">{item.title}</Typography>
                            </Box>
                        ))
                    }
                </Box>
            }
        </Box>
    )
}
export default SeasonalCollections;