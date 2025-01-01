import { Box, Typography } from "@mui/material";
import Page from "./page";
import theme from "../theme.js";

function Footer(){
    return (
        <footer>
            <Page height={'10rem'} background={theme.palette.background.tertiary}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between' , 
                    alignItems: 'center', 
                    gap: '1rem', 
                }}>
                    <Typography component="p" 
                    sx={{
                        color: theme.palette.background.primary, 
                        fontStyle: 'italic',
                        fontSize: { xs: '0.75rem', lg: '1rem' },
                        
                    }}>
                    These drawings were inspired by a mix of ideas and visuals I came across while exploring art.
                    </Typography>
                </Box>
            </Page>
        </footer>
    )
}

export default Footer;