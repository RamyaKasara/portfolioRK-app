import { styled } from '@mui/material';
import theme from '../theme.js';

const GradientDiv = styled('div')({
    flexGrow: 1,
    width: '100%',
    background: `linear-gradient(
        to bottom, 
        ${theme.palette.commonColors.lightest} 0%,
        ${theme.palette.commonColors.lighter} 70%,
        ${theme.palette.commonColors.light} 90%,
        ${theme.palette.commonColors.dark} 95%,
        ${theme.palette.commonColors.darker} 98%,
        ${theme.palette.commonColors.darkest}  100%
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