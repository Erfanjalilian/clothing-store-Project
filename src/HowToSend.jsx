import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Navbar from './Components/Navbar';
import { Box,List,ListItem } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SpeedIcon from '@mui/icons-material/Speed';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function HowToSend() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <Navbar />
        
         <Box sx={{
            width:"90%",
            height:"auto",
            marginLeft:"auto",
            marginRight:"auto"
         }}>
            <Typography sx={{
            marginTop:"20px"
        }} color='gray' variant='body2'>خانه / نحوه ارسال </Typography>
         <Typography sx={{
            marginTop:"20px",
            marginBottom:"20px"
         }} variant='h5'>نحوه ارسال</Typography>
             <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"}
         }}>
            
            <Box sx={{
                width:{sm:"100%",md:"69%",lg:"69%"}
            }}>
                 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">ارسال از طریق پست</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"}
          }}>
            <Box sx={{
              width:{sm:"100%",md:"10%",lg:"10%"}
            }}>
              <LocalShippingIcon sx={{
                fontSize:"4rem",
                color:"gray"
              }} />
            </Box>
             <Box sx={{
              width:{sm:"100%",md:"55%",lg:"55%"}
             }}>
              <Typography sx={{
                marginBottom:"10px"
              }} color='black' variant='h5'>پست پیشتاز</Typography>
              <Typography color='gray' variant='body2'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان است  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Typography>
             </Box>
              <Box sx={{
                width:{sm:"100%",md:"30%",lg:"30%"}
              }}>
                <Typography>تهران جنب تئاتر پارک وی، نمای کوهستان روبروی بانک کار افرین ملت</Typography>
                <Typography>روزانه 10:00 صبح تا 9:00 شب</Typography>
                <Link>نحوه دریافت به فروشگاه</Link>
              </Box>
          </Box>
          <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"},
            marginTop:"60px"
          }}>
            <Box sx={{
              width:{sm:"100%",md:"10%",lg:"10%"}
            }}>
              <VolunteerActivismIcon sx={{
                fontSize:"4rem",
                color:"gray"
              }} />
            </Box>
             <Box sx={{
              width:{sm:"100%",md:"55%",lg:"55%"}
             }}>
              <Typography sx={{
                marginBottom:"10px"
              }} color='black' variant='h5'>پست سفارشی</Typography>
              <Typography color='gray' variant='body2'>
                   شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای رایانه ای علی الخصوص خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای است.
              </Typography>
             </Box>
              <Box sx={{
                width:{sm:"100%",md:"30%",lg:"30%"}
              }}>
                <Typography color='black' variant='body1'>رایگان</Typography>
                <Typography color='gray' variant='body2'>جهت پرداخت آنلاین از طریق دروازه پرداخت</Typography>
                <Typography sx={{
                  marginTop:"20px"
                }} variant='body1' color='black'>۳۰ هزار تومان</Typography>
                <Typography color='gray' variant='body2'>اگر مبلغ سفارش زیر ۵۰۰ هزار تومان باشد. سفارشات بالاتر از این مقدار به صورت رایگان تحویل داده می شود.</Typography>
                
              </Box>
          </Box>
          <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"},
            marginTop:"60px"
          }}>
            <Box sx={{
              width:{sm:"100%",md:"10%",lg:"10%"}
            }}>
              <SpeedIcon sx={{
                fontSize:"4rem",
                color:"gray"
              }} />
            </Box>
             <Box sx={{
              width:{sm:"100%",md:"55%",lg:"55%"}
             }}>
              <Typography sx={{
                marginBottom:"10px"
              }} color='black' variant='h5'>ارسال با پیک</Typography>
              <Typography color='gray' variant='body2'>
                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده دارد.
              </Typography>
             </Box>
              <Box sx={{
                width:{sm:"100%",md:"30%",lg:"30%"}
              }}>
                <Typography color='black' variant='body1'>رایگان</Typography>
                <Typography color='gray' variant='body2'>جهت پرداخت آنلاین از طریق دروازه پرداخت</Typography>
                <Typography sx={{
                  marginTop:"20px"
                }} variant='body1' color='black'>۳۰ هزار تومان</Typography>
                <Typography color='gray' variant='body2'>اگر مبلغ سفارش زیر ۵۰۰ هزار تومان باشد. سفارشات بالاتر از این مقدار به صورت رایگان تحویل داده می شود.</Typography>
                
              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">ارسال به خارج از کشور</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"},
            marginTop:"60px"
          }}>
            <Box sx={{
              width:{sm:"100%",md:"10%",lg:"10%"}
            }}>
              <ConnectingAirportsIcon sx={{
                fontSize:"4rem",
                color:"gray"
              }} />
            </Box>
             <Box sx={{
              width:{sm:"100%",md:"55%",lg:"55%"}
             }}>
              <Typography sx={{
                marginBottom:"10px"
              }} color='black' variant='h5'>خدمات تحویل</Typography>
              <Typography color='gray' variant='body2'>
                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری داشت.
              </Typography>
             </Box>
              <Box sx={{
                width:{sm:"100%",md:"30%",lg:"30%"}
              }}>
                <Typography color='black' variant='body1'>قیمت سفارشی</Typography>
                <Typography color='gray' variant='body2'>قیمت توسط شرکت حمل و نقل و طبق قوانین مالیاتی و سایر قوانین تعیین می شود</Typography>
                <Typography sx={{
                  marginTop:"20px"
                }} variant='body1' color='black'>2 الی 5 روز</Typography>
                <Typography color='gray' variant='body2'>زمان تخمینی تحویل بستگی به کشور و شرکت حمل و نقل شما دارد</Typography>
                
              </Box>
          </Box>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">برای شرکت ها</Typography>
        </AccordionSummary>
        <AccordionDetails>
               <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"},
            marginTop:"60px"
          }}>
            <Box sx={{
              width:{sm:"100%",md:"10%",lg:"10%"}
            }}>
              <WbTwilightIcon sx={{
                fontSize:"4rem",
                color:"gray"
              }} />
            </Box>
             <Box sx={{
              width:{sm:"100%",md:"55%",lg:"55%"}
             }}>
              <Typography sx={{
                marginBottom:"10px"
              }} color='black' variant='h5'>ارسال پستی</Typography>
              <Typography color='gray' variant='body2'>
                   برای دریافت فاکتور برای شرکت خود، روش پرداخت «حواله بانکی» را انتخاب کنید.

لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت.

قیمت‌های فروشگاه بدون مالیات بر ارزش افزوده و سایر مالیات‌های محلی که ممکن است اعمال شود نشان داده شده است
              </Typography>
             </Box>
              <Box sx={{
                width:{sm:"100%",md:"30%",lg:"30%"}
              }}>
                <Typography color='black' variant='body1'>تهران جنب تئاتر پارک وی، نمای کوهستان روبروی بانک کار افرین ملت</Typography>
                <Typography color='gray' variant='body2'>روزانه 10:00 صبح تا 9:00 شب</Typography>
                <Link>نحوه دریافت به فروشگاه</Link> 
                
              </Box>
          </Box>
            <Box sx={{
            display:{sm:"block",md:"flex",lg:"flex"},
            justifyContent:{sm:"none",md:"space-between",lg:"space-between"},
            marginTop:"60px"
          }}>
            <Box sx={{
              width:{sm:"100%",md:"10%",lg:"10%"}
            }}>
              <ConnectingAirportsIcon sx={{
                fontSize:"4rem",
                color:"gray"
              }} />
            </Box>
             <Box sx={{
              width:{sm:"100%",md:"55%",lg:"55%"}
             }}>
              <Typography sx={{
                marginBottom:"10px"
              }} color='black' variant='h5'>خدمات تحویل</Typography>
              <Typography color='gray' variant='body2'>
                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری داشت.
              </Typography>
             </Box>
              <Box sx={{
                width:{sm:"100%",md:"30%",lg:"30%"}
              }}>
                <Typography color='black' variant='body1'>قیمت سفارشی</Typography>
                <Typography color='gray' variant='body2'>قیمت توسط شرکت حمل و نقل و طبق قوانین مالیاتی و سایر قوانین تعیین می شود</Typography>
                <Typography sx={{
                  marginTop:"20px"
                }} variant='body1' color='black'>2 الی 5 روز</Typography>
                <Typography color='gray' variant='body2'>زمان تخمینی تحویل بستگی به کشور و شرکت حمل و نقل شما دارد</Typography>
                
              </Box>
          </Box>

        </AccordionDetails>
      </Accordion>
            </Box>
            <Box sx={{
                width:{sm:"100%",md:"39%",lg:"39%"}
            }}>
                <List>
                        <ListItem>سوالات متدوال</ListItem>
                        <ListItem>نحوه ارسال</ListItem>
                        <ListItem>نحوه پرداخت</ListItem>
                        <ListItem>بازگشت</ListItem>
                    </List>
            </Box>
         </Box>
     
         </Box>
        
    </div>
  );
}
