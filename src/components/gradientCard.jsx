import { styled } from '@mui/material';
import theme from '../theme.js';

const GradientDiv = styled('div')({
    flexGrow: 1,
    width: '100%',
    background: theme.palette.background.primary,
});

function GradientCard({children}) {
    return ( 
        <GradientDiv>
            {children}
        </GradientDiv>
     );
}

export default GradientCard;