import { Box,Container } from "@mui/material"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import SeasonalCollections from "./Components/SeasonalCollections"
import PopularProducts from "./Components/PopularProducts"
function HomePage(){
    return(
        <Box>
            <Container maxWidth='lg'>
                <Navbar />
                <Slider />
                <SeasonalCollections />
                <PopularProducts />
            </Container>
        </Box>
    )
}
export default HomePage