import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import fashionImage from './fashion.jpg'

export default function ContactCard() {
 

  const name = "CROWN*EMPORIO";
  const email = 'crowns@example.com';
  const phone = '+1234567890';
  const address = '1234 Street Name, City, Country';

  return (
   <div>
    <h1 style={{marginTop:'50px',justifyContent:'center', WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "black",textAlign:'center'}}>CONTACT US</h1>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'120px'}}>
         
    <Card sx={{ display: 'flex',  justifyContent:'content',alignContent:'center', height:'300px', boxShadow:'10px 10px 5px grey'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" fontFamily="Papyrus" fontWeight={"bold"}>
            {name}
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {phone}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {address}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="location">
            <LocationOnIcon />
          </IconButton>
          <IconButton aria-label="email">
            <EmailIcon />
          </IconButton>
          <IconButton aria-label="phone">
            <PhoneIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
       component="img"
       sx={{ width: 151 }}
      
       image={fashionImage}
       alt="Clothing"
      />
    </Card>
    </Box>
    </div>
  );
}
