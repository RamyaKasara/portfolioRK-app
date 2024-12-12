import { Box, styled } from '@mui/material';
import theme from '../theme.js';

const PageBox = styled(Box)(({ background, height, width }) => ({
    flexGrow: 1,
    width: width || '100%',
    minHeight: height || 'auto',
    background: background || theme.palette.background.primary,
}));

function Page({ children, background, height, width }) {
    console.log("height", height);
    return ( 
        <PageBox background={background} height={height} width={width}>
            {children}
        </PageBox>
     );
}

export default Page;