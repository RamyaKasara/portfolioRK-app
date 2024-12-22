import { Box, styled } from '@mui/material';
import theme from '../theme.js';

const PageBox = styled(Box)(({ background, height, width }) => ({
    flexGrow: 1,
    width: width || '100%',
    minHeight: typeof height === 'object' ? 'auto' : height || 'auto', // Fallback for non-responsive height
    background: background || theme.palette.background.primary,
    ...(typeof height === 'object' && {
        [theme.breakpoints.up('xs')]: {
            minHeight: height.xs, // Small screens
        },
        [theme.breakpoints.up('md')]: {
            minHeight: height.md, // Medium and larger screens
        },
    }),
}));

function Page({ children, background, height, width }) {
    return ( 
        <PageBox background={background} height={height} width={width}>
            {children}
        </PageBox>
     );
}

export default Page;