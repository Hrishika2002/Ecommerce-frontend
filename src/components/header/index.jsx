import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import MenuListComposition from '../cart-items';

export const Header = () => {

    const navigate = useNavigate()
    
    return (
        <AppBar position="static" style={{ backgroundColor: "silver", color: "black" }}>
            <Toolbar>
            
                <img src="favicon.ico" alt="Logo" style={{ marginRight: '80px', marginLeft:'50px', height:'50px', cursor:'pointer' } } onClick={() => navigate('/')} />
                <div style={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="div" textAlign={"center"} fontFamily="Papyrus" fontWeight={"bold"}>
                        CROWN*EMPORIO
                    </Typography>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center">
                        <IconButton color="inherit" onClick={() => navigate('/shop')} >
                            <Typography fontSize={"20px"} component="div" textAlign={"center"} fontFamily="Georgia">
                                SHOP
                            </Typography></IconButton>
                        <IconButton color="inherit" onClick={() => navigate('/contact')}>
                            <Typography fontSize={"20px"} component="div" textAlign={"center"} fontFamily="Georgia">
                                CONTACT
                            </Typography></IconButton>

                        <IconButton color="#000000 " onClick={() => navigate('/sign_up')}>

                            <Typography fontSize={"20px"} component="div" textAlign={"center"} fontFamily="Georgia" color={"black"}> SIGN IN

                            </Typography>
                        </IconButton>
                        <MenuListComposition />
                        {/* <IconButton color="#000000">
                            <img src={ShoppingBagSvg} alt="Shopping Bag" style={{ paddingLeft: '7px', height: '26px' }} />
                        </IconButton> */}
                    </Grid>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header