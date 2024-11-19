import { styled } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import GradientCard from '../../components/gradientCard.jsx';
import theme from '../../theme.js';

const PageDiv = styled('div')({
    // backgroundColor: theme.palette.commonColors.lightest,
    height: '100vh',
    // background: `linear-gradient(
    //     to bottom, 
    //     ${theme.palette.commonColors.lightest}, /* Lightest */
    //     ${theme.palette.commonColors.lighter}, /* Lighter */
    //     ${theme.palette.commonColors.light}, /* Light */
    //     ${theme.palette.commonColors.dark}, /* Dark */
    //     ${theme.palette.commonColors.darker}, /* Darker */
    //     ${theme.palette.commonColors.darkest}  /* Darkest */
    // )`,
    backgroundColor: theme.palette.commonColors.lightest,
});

function HomePage() {
    return ( 
        <PageDiv>
            <Navbar/>
            Home Page
            <GradientCard/>
        </PageDiv>
        
     );
}

export default HomePage;