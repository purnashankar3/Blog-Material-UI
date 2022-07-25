import { Card, CardActions, CardContent, CardHeader, Typography,Button } from "@mui/material";
import path from '../assets/pathInGreenary.avif'
const Feature = () =>{
    return(
        <>
        <Card style={{backgroundImage:`url(${path})`,padding:'25px 30px'}}>
           
            <CardContent>
                <Typography variant='h4' gutterBottom>Title of the featured blog post</Typography>
                <Typography variant='h6'>MUI offers a comprehensive suite of UI tools to help you ship new features faster. 
                    Start with Material UI, our fully-loaded component library,
                     or bring your own design system to our production-ready components.</Typography>
            </CardContent>
            <CardActions><Button color='primary'>Readmore...</Button></CardActions>
        </Card>
        </>
    )
}
export default Feature;