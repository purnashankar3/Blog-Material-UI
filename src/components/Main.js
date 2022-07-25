import Markdown from "markdown-to-jsx";
import { posts } from "../data/Data";
import { Grid } from "@mui/material";

const Main = () =>{
    return(<Grid item xs={12} md={8}>
        {posts.map(post=>(
            <Markdown key={post.body}>{post.body}</Markdown>
        ))}
    </Grid>)
}
export default Main;