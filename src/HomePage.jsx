import { Box,Container } from "@mui/material"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import SeasonalCollections from "./Components/SeasonalCollections"
import PopularProducts from "./Components/PopularProducts"
function HomePage(){
    return(
        <Box>
            <Navbar />
            <Box sx={{
                width:"90%",
                height:"auto",
                marginLeft:"auto",
                marginRight:"auto"
            }}>
                
                <Slider />
                <SeasonalCollections />
                <PopularProducts />
            </Box>
        </Box>
    )
}
export default HomePage