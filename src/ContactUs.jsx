import { Box,Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
function ContactUs(){
    return(
        <Box>
            <Navbar />
            <Box sx={{
                width:"90%",
                height:"auto",
                marginLeft:"auto",
                marginRight:"auto"
            }}>
                <Typography sx={{
                    marginTop:"30px",
                    marginBottom:"30px",
                    color:"gray"
                }} variant="body1">خانه / ارتباط با ما</Typography>
                <Typography variant="h5">ارتباط با ما</Typography>
            </Box>
        </Box>
    )
}
export default ContactUs;