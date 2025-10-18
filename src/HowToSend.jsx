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
            <Box></Box>
             <Box></Box>
              <Box></Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
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
