import { styled } from '@mui/material';
import theme from '../theme.js';

const PageDiv = styled('div')({
    flexGrow: 1,
    width: '100%',
    background: theme.palette.background.primary,
});

function GradientCard({children}) {
    return ( 
        <PageDiv>
            {children}
        </PageDiv>
     );
}

export default GradientCard;