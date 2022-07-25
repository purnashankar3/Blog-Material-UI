import {Toolbar,Divider,IconButton,Typography,Badge} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { textTransform } from "@mui/system";
import SideDrawer from "./SideDrawer";

//const useStyles = makeStyles((theme)=>({title:{flexGrow:1},tagline:{}}))
const Header = () =>{
   
    return(
        <>
        <Toolbar>
            <SideDrawer>
            <IconButton><MenuIcon color='inherit'/></IconButton>
            </SideDrawer>
            <Typography variant='h6'  style={{flexGrow:1}}>Blogging Website</Typography>
            
            <IconButton>
            <Badge badgeContent={3} color='secondary'>
                <NotificationsIcon/>
            </Badge>
            </IconButton>
            
            <IconButton>
                <AccountCircleIcon/>
            </IconButton>
        </Toolbar>
        <Divider/>
        <Toolbar>
            <Typography variant="h5" style={{textTransform:'uppercase',justifyContent:'center',fontFamily:'Montserrat'}}>Express your emotions through words</Typography>
        </Toolbar>
        </>
    )
}
export default Header;