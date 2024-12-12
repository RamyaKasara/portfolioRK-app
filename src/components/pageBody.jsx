import { styled } from '@mui/material';
import theme from '../theme.js';

const PageDiv = styled('div')(({ background }) => ({
    flexGrow: 1,
    width: '100%',
    background: background || theme.palette.background.primary,
}));

function PageBody({children, background}) {
    return ( 
        <PageDiv background={background}>
            {children}
        </PageDiv>
     );
}

export default PageBody;