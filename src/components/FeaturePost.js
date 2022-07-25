import { CardActionArea, CardContent, Typography,Card,Button,Grid, Hidden, CardMedia } from "@mui/material"

const FeaturePost = ({post}) =>{
    return(
        <Grid item xs={12} md={6}>
        <CardActionArea>
            <Card style={{display:'flex'}}>
                <CardContent style={{flex:1}}>
                    <Typography variant="h5">
                        {post.title}
                    </Typography>
                    <Typography color='textSecondary'>
                        {post.date}
                    </Typography>
                    <Typography variant="subtitle1">{post.description}</Typography>
                    <Button color='primary'>Continue to read...</Button>

                </CardContent>
                <Hidden xsDown style={{width:'160px'}}>
                    <CardMedia image={post.image} />
                </Hidden>
            </Card>
        </CardActionArea>
        </Grid>
    )
}

export default FeaturePost