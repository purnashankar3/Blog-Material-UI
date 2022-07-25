
import './App.css';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/styles';

import { Container } from '@mui/system';
import Header from './components/Header'
import Feature from './components/Feature';
import {featuredPosts, sidebar} from "./data/Data"
import FeaturePost from './components/FeaturePost';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  return (
   <ThemeProvider theme={darkTheme}>
   <Container>
    <Header/>
    <Feature/>
    <br/>
    <Grid container spacing={4}>{
      featuredPosts.map(post=>(<FeaturePost post={post} key={post.title}></FeaturePost>))}
    </Grid>
    <br/>
    <Grid container spacing={5}>
      <Main/>
      <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social}/>
    </Grid>
    
   </Container>
   <Footer />
   </ThemeProvider>
  );
}

export default App;
