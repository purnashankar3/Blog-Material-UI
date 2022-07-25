import {Grid, Typography,Link,Paper} from '@mui/material';


const Sidebar = ({title,description,archives,social}) =>{
    return(<Grid item xs={12} md={4}>
        <>
        <Paper>
        <Typography elevation={0} variant='h5' gutterBottom>{title}</Typography>
        <Typography>{description}</Typography>
        </Paper>
        <Typography variant='h5'>Archives</Typography>
        <Typography>{archives.map(archive=><Link display='block' href='archive.url' >{archive.title}</Link>)}</Typography>
        <Typography variant='h5'>Social</Typography>
       <Typography>{social.map(network=><Link display='block' href='archive.url' ><Grid  spacing={5}>{network.icon}{network.name}</Grid></Link>)}</Typography>
        </>
    </Grid>)
}
export default Sidebar;