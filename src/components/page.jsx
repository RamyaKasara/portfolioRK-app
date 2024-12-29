import { Box, styled } from '@mui/material';
import theme from '../theme.js';

const PageBox = styled(Box)(({ background, height, width }) => ({
    flexGrow: 1,
    width: width || '100%',
    minHeight: typeof height === 'object' ? 'auto' : height || 'auto', // Fallback for non-responsive height
    background: background || theme.palette.background.primary,
    ...(typeof height === 'object' && {
        ...(height.xs && {
            [theme.breakpoints.up('xs')]: {
                minHeight: height.xs, // Height for xs breakpoint
            },
        }),
        ...(height.sm && {
            [theme.breakpoints.up('sm')]: {
                minHeight: height.sm, // Height for sm breakpoint
            },
        }),
        ...(height.md && {
            [theme.breakpoints.up('md')]: {
                minHeight: height.md, // Height for md breakpoint
            },
        }),
        ...(height.lg && {
            [theme.breakpoints.up('lg')]: {
                minHeight: height.lg, // Height for lg breakpoint
            },
        }),
        ...(height.xl && {
            [theme.breakpoints.up('xl')]: {
                minHeight: height.xl, // Height for xl breakpoint
            },
        }),
        ...(height.custom && {
            '@media (min-width: 400px) and (max-width: 600px)': {
                minHeight: height.custom, // Custom range: 400px to 600px
            },
        }),
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