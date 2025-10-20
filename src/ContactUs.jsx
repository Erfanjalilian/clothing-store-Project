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
                <Box sx={{
                    display:{sm:"block",md:"flex",lg:"flex"},
                    flexWrap:"wrap",
                    justifyContent:{sm:"none",md:"space-between",lg:"space-between"}
                }}>
                    <Box width={"40%"}>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="h5">تلفن‌ها</Typography>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="body1">1234 888 021 — رایگان در ایران</Typography>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="body1">1252 888 021</Typography>
                        <Typography sx={{
                            marginTop:"30px",
                        }} variant="h5">فروشگاه ما</Typography>
                        <Typography sx={{
                            display:"inline",
                            marginTop:"10px"
                        }} variant="body1">آدرس:</Typography>
                        <Typography sx={{
                            display:"inline",
                            color:"gray",
                            marginTop:"10px"
                        }} variant="body1">تهران جنب تئاتر پارک وی، نمای کوهستان روبروی بانک کار افرین ملت</Typography>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="body1">ساعات فروشگاه:</Typography>
                        <Typography sx={{
                            color:"gray",
                            marginTop:"10px"
                        }} variant="body1">همه روزه 10:00 صبح تا 9: 00 بعد از ظهر</Typography>
                    </Box>
                    <Box width={"59%"}>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="h5">خرید آنلاین</Typography>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="body1">در حال پردازش سفارشات</Typography>
                        <Typography sx={{
                            color:"gray",
                            marginTop:"10px"
                        }} variant="body1">8:00 صبح تا 9:00 بعد از ظهر</Typography>
                        <Typography sx={{
                            color:"black",
                            marginTop:"10px"
                        }} variant="body1">سفارش‌های خارج از این بازه زمانی در روز کاری بعدی پردازش می‌شوند

</Typography>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="h5">بخش فروش</Typography>
                        <Typography sx={{
                            marginTop:"10px"
                        }} variant="body1">برای سؤالات کلی درباره سفارش خود لطفاً با</Typography>
                        <a style={{
                            marginTop:"30px",
                            color:"orange",
                            textDecoration:"none"
                        }} href="sales@example.com">sales@example.com</a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default ContactUs;