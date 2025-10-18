import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import Navbar from './Components/Navbar';
import { Box,ListItem,List } from '@mui/material';

export default function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
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
            }} color='gray' variant='body2'>خانه  /  سوالات متداول</Typography>
            <Typography sx={{
                marginTop:"20px",
                marginBottom:"20px"
            }} variant='h5'>سوالات متداول</Typography>
            <Box sx={{
                display:{sm:"block",md:"flex",lg:"flex"},
                justifyContent:{sm:"none",md:"space-between",lg:"space-between"}
            }}>
                <Box sx={{
                    width:{sm:"100%",md:"60%",lg:"60%"}
                }}>
                     <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">کدام سیستم های پرداخت را قبول دارید</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز دارد.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">چگونه می توانم نظری برای محصول پیدا کنم یا بنویسم</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
       تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.get.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">آیا برای محصولات خود کارت هدیه ارائه می دهید؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </Typography>
        </AccordionDetails>
      </Accordion>
             <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">چگونه از کد کوپن خود استفاده کنم؟ فقط برای یک خرید هست؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
          </Typography>
        </AccordionDetails>
      </Accordion>
                  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">چگونه می توانم در مورد فروش مداوم و آینده یاد بگیرم؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
          </Typography>
        </AccordionDetails>
      </Accordion>
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">مشترک بودن / مشتری ثبت نام شده چه مزایایی دارد؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
          </Typography>
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">چگونه از تیم موفقیت مشتری کمک بگیرم؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </Typography>
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
