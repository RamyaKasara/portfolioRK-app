import { styled } from '@mui/material';
import theme from '../theme.js';

const GradientDiv = styled('div')({
    flexGrow: 1,
    width: '100%',
    background: `linear-gradient(
        to bottom, 
        ${theme.palette.commonColors.lightest} 0%,
        ${theme.palette.commonColors.lighter} 40%,
        ${theme.palette.commonColors.light} 65%,
        ${theme.palette.commonColors.dark} 80%,
        ${theme.palette.commonColors.darker} 90%,
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