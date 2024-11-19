import { styled } from '@mui/material';
import theme from '../theme.js';

const GradientDiv = styled('div')({
    height: '30%',
    width: '50%',
    background: `linear-gradient(
        to bottom, 
        ${theme.palette.commonColors.lightest}, /* Lightest */
        ${theme.palette.commonColors.lighter}, /* Lighter */
        ${theme.palette.commonColors.light}, /* Light */
        ${theme.palette.commonColors.dark}, /* Dark */
        ${theme.palette.commonColors.darker}, /* Darker */
        ${theme.palette.commonColors.darkest}  /* Darkest */
    )`,
});

function GradientCard() {
    return ( 
        <GradientDiv>
            {/* replace with the Paper element in MUI */}
            card
        </GradientDiv>
        
     );
}

export default GradientCard;