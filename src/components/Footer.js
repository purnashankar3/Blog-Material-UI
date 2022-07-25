import { Typography ,Link,Stack} from "@mui/material"

const Footer = () =>{
    return(
    <Stack style={{backgroundColor:"#9e9e9e",padding:"75px 0"}}>
    <Typography align="center">Footer</Typography>
    <Typography align="center">Copyright © {" "} {new Date().getFullYear()}</Typography>
    <Typography align="center">Learn  <Link href='https://mui.com/'>Material ui</Link></Typography>
    </Stack>
    )
}

export default Footer;