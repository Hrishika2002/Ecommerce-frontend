import hatsImage from './images/hats.png';
import sneakerImage from './images/sneakers.png';
import womenImage from './images/womens.png';
import menImage from './images/men.png';
import jacketsImage from './images/jackets.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './index.css';
import { useNavigate } from "react-router-dom";


export const Home =()=> {
   
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/hats')
    }
    
        return (
            <Box
                alignContent={'center'}
                sx={{ border: '1px solid grey' }}
            >
                <div className="first_row" style={{ paddingLeft: '100px', paddingRight: '100px', cursor:'pointer' }}>
                    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" marginTop={'20px'} marginBottom={'20px'}>
                        <Grid item xs={12} sm={6} lg={4} >
                       
                            <div className="container" onClick={handleClick}>
                            
                                <img src={hatsImage} alt="hatImage" style={{ border:'2px solid grey ',width: '100%', height: '300px', objectFit: 'cover' , boxShadow:'5px 10px 10px grey'}} />
                                
                                
                                <div className="text-block">
                                    <h3 style={{ fontFamily: 'Georgia' }}>HATS</h3>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                       
                            <div className="container" onClick={()=>navigate('/jackets')}>
                                <img src={jacketsImage} alt="jacketsImage" style={{border:'2px solid grey ', width: '100%', height: '300px', objectFit: 'cover', boxShadow:'5px 10px 10px grey' }} />
                                <div className="text-block-jacket">
                                    <h3 style={{ fontFamily: 'Georgia' }}>JACKETS</h3>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <div className="container" onClick={()=>navigate('/sneakers')}>
                                <img src={sneakerImage} alt="sneakerImage" style={{border:'2px solid grey ', width: '100%', height: '300px', objectFit: 'cover', boxShadow:'5px 10px 10px grey' }} />
                                <div className="text-block-sneaker">
                                    <h3 style={{ fontFamily: 'Georgia' }}>SNEAKERS</h3>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="second_row" style={{ paddingLeft: '100px', paddingRight: '100px', cursor:'pointer'}}>
                    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" marginTop={'5px'} marginBottom={'20px'}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <div className="container" onClick={()=>navigate('/womens')}>
                                <img src={womenImage} alt="womenImage" style={{ border:'2px solid grey ',width: '100%', height: '300px', objectFit: 'cover', boxShadow:'5px 10px 10px grey' }} />
                                <div className="text-block-women">
                                    <h3 style={{ fontFamily: 'Georgia' }}>WOMEN</h3>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <div className="container" onClick={()=>navigate('/mens')}>
                                <img src={menImage} alt="menImage" style={{border:'2px solid grey ', width: '100%', height: '300px', objectFit: 'cover', boxShadow:'5px 10px 10px grey' }} />
                                <div className="text-block-men">
                                    <h3 style={{ fontFamily: 'Georgia' }}>MEN</h3>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        );
    }

export default Home;
