import { Box,Typography,List,ListItem } from "@mui/material"
import Navbar from "./Components/Navbar"
function PaymentMethod(){
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
                color:"gray",
                marginTop:"30px"
            }} variant="body2">خانه / نحوه پرداخت</Typography>
            <Typography sx={{
                color:"black",
                marginTop:"10px"
            }} variant="h5">نحوه پرداخت</Typography>
            <Typography sx={{
                color:"black",
                marginTop:"10px"
            }} variant="h4">پرداخت در فروشگاه</Typography>
            <Typography sx={{
                color:"gray",
                marginTop:"10px"
            }} variant="body2">در فروشگاه و بخش‌های آن، روش‌های پرداخت زیر را می‌پذیریم:</Typography>
            <List>
                <ListItem>
                    <Typography sx={{
                        color:"gray",
                        marginTop:"10px"
                    }} variant="body2">نقد</Typography>
                </ListItem>
                <ListItem>
                    <Typography sx={{
                        color:"gray",
                        marginTop:"10px"
                    }} variant="body2">سیستم های پرداخت</Typography>
                </ListItem>
                <ListItem>
                    <Typography sx={{
                        color:"gray",
                        marginTop:"10px"
                    }} variant="body2">کارت بانکی</Typography>
                </ListItem>
                <ListItem>
                    <Typography sx={{
                        color:"gray",
                        marginTop:"10px"
                    }} variant="body2">ترکیبی – هنگام پرداخت برای کالا، می‌توانید چندین روش را برای تقسیم مبلغ چک ترکیب کنید.</Typography>
                </ListItem>
            </List>
            <Typography sx={{
                marginTop:"20px"
            }} variant="h5">سفارش آنلاین</Typography>
            <Typography sx={{
                marginTop:"10px"
            }} variant="h6">نقد هنگام تحویل</Typography>
            <Typography sx={{
                marginTop:"10px"
            }} variant="body1">هنگام اتمام سفارش، روش “در هنگام تحویل” را مشخص کنید. به این ترتیب پرداخت توسط پیک پس از دریافت و پذیرش کالا(ها) انجام می شود.

</Typography>
 <Typography sx={{
                marginTop:"10px"
            }} variant="h6">کارت اعتباری هنگام تحویل</Typography>
            <Typography sx={{
                marginTop:"10px"
            }} variant="body1">   هنگام اتمام سفارش، روش پرداخت “از طریق کارت به پیک” را مشخص کنید. پیک با پایانه پرداخت وارد می شود.



</Typography>
 <Typography sx={{
                marginTop:"10px"
            }} variant="h6">پرداخت آنلاین</Typography>
            <Typography sx={{
                marginTop:"10px"
            }} variant="body1">  هنگام اتمام سفارش، روش پرداخت “پرداخت آنلاین” را مشخص کنید. مدیر فروش ما برای توافق در مورد لیست کالاها و شرایط تحویل با شما تماس خواهد گرفت.

</Typography>
 <Typography sx={{
                marginTop:"10px"
            }} variant="h6">برای شرکت ها</Typography>
            <Typography sx={{
                marginTop:"10px"
            }} variant="body1">
                برای تشکیل و دریافت فاکتور برای حساب شرکت مشخص شده، روش پرداخت «حواله بانکی» را انتخاب کنید. مدیر فروش ما برای تأیید فهرست اقلام و شرایط تحویل با شما تماس خواهد گرفت و یک نسخه از فاکتور را از طریق ایمیل برای شما ارسال می کند. 

</Typography>
            </Box>
        </Box>
    )
}
export default PaymentMethod