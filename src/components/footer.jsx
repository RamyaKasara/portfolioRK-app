import { Box, Typography } from "@mui/material";
import Page from "./page";
import theme from "../theme.js";

function Footer(){
    return (
        <footer>
            <Page height={{xs:'9rem', sm:'5rem'}} background={theme.palette.background.tertiary}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between' , 
                    alignItems: 'center', 
                    gap: '2rem', 
                    padding: {xs:'1.5rem 3rem', sm:'1rem 2rem' ,md:'2rem 2rem'},
                }}>
                    <Typography component="p" 
                    sx={{
                        color: theme.palette.background.primary, 
                        fontStyle: 'italic',
                        fontSize: { xs: '0.75rem', lg: '1rem' },
                        fontWeight: '200',
                    }}>
                    © Ramya Kasara, 2025. All rights reserved.
                    </Typography>
                    <Typography component="p" 
                    sx={{
                        color: theme.palette.background.primary, 
                        fontStyle: 'italic',
                        fontSize: { xs: '0.75rem', lg: '1rem' },
                        fontWeight: '200',
                    }}>
                    All illustrations showcased here are hand-drawn by me. This portfolio is for personal and non-commercial purposes.
                    </Typography>
                </Box>
            </Page>
        </footer>
    )
}

export default Footer;