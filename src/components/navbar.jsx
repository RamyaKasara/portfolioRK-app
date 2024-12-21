// 1. Core/Library Imports
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// 2. MUI Component Imports
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@mui/material";
// 3. MUI Utility Imports
import { useTheme, styled } from "@mui/material/styles";
// 4. Asset Imports
import fishMicron from '../assets/images/fish-micron.png';



const NavigationAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary,
    boxShadow: 'none', 
}))

const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        backgroundColor: theme.palette.background.primary, // Secondary background color
        color: theme.palette.text.primary, // Primary text color
        opacity: 0.8, // Opacity of the menu,
    },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.background.primary, 
    },
    '&:active': {
        backgroundColor: theme.palette.background.primary, 
        borderColor: theme.palette.text.primary, 
        color: theme.palette.text.primary, 
        transform: 'scale(1.05)', 
        transition: 'all 0.3s ease', 
    },
}))

export const TagButton = styled(Button)(({ theme, backgroundColor, color, hoverBackgroundColor, hoverColor }) => ({
    borderRadius: '1rem',
    padding: '4px 12px',
    border: `1px solid ${backgroundColor || theme.palette.background.tertiary}`,
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: backgroundColor || theme.palette.background.tertiary,
    fontSize: '1rem',
    color: color || theme.palette.background.primary,
    '&:hover': {
        backgroundColor: hoverBackgroundColor || theme.palette.background.primary, // Change background on hover
        borderColor: hoverBackgroundColor || theme.palette.background.primary, // Change border color on hover
        color: hoverColor|| theme.palette.text.primary, // Change text color on hover
        transform: 'scale(1.05)', // Slightly enlarge the button for effect
        transition: 'all 0.3s ease', // Smooth transition for hover effects
    },
    //after clicking on the button
    '&:active': {
        backgroundColor: hoverColor || theme.palette.background.primary, 
        borderColor: hoverColor || theme.palette.text.primary, 
        color: hoverColor || theme.palette.text.primary, 
        transform: 'scale(1.05)', 
        transition: 'all 0.3s ease', 
    },
    '&:focus': {
        outline: 'none', // Remove the default outline
    },
    '@media (min-width:1150px)': {
        fontSize: '1.125rem', // Medium screen size
        borderRadius: '1.125rem',
      },
}));

const RegularButton = styled(Button)(({ theme }) => ({
    borderRadius: '16px',
    '&:hover': {
        transform: 'scale(1.04)',
        backgroundColor: theme.palette.background.primary,
    },
    '&:focus': {
        outline: 'none',
    }
}));


function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleMenuOpen = (event) => {
        setIsMenuOpen(!isMenuOpen);
        setAnchorEl(event.currentTarget);
    };

    const toggleMenuClose = () => {
        setIsMenuOpen(false);
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    return ( 
        <>
            <NavigationAppBar position="sticky" style={{flexShrink: 0}}>
                <Toolbar>
                    <Box sx={{ height: '100px', mr: '1rem' }} component="img" src={fishMicron} alt="fish-micron" />
                    <Typography
                        variant="h3_1"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Ramya Kasara
                    </Typography>
                    { isMobile &&
                        (<IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            onClick={toggleMenuOpen}
                            sx={{cursor: "pointer", color: theme.palette.text.primary, padding: '0px'}}
                        >
                        {/* <MenuIcon /> */}
                            <TagButton color="inherit">Menu</TagButton>
                        </IconButton>)}
                    {   !isMobile &&
                        (<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <RegularButton color="inherit" onClick={() => navigate('/about-me')} >About Me</RegularButton>
                            <RegularButton color="inherit">Resume</RegularButton>
                            <TagButton color="inherit">Hit Me Up!</TagButton>
                        </Box>)
                    }
                </Toolbar>
                {   (!isMobile || isMenuOpen) &&
                    (<StyledMenu
                        anchorEl={anchorEl} // The menu anchors to this element
                        open={isMenuOpen} 
                        onClose={toggleMenuClose}
                    >
                            {/* <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Contact</Button> */}
                        {/* Menu items will stack vertically */}
                    <StyledMenuItem onClick={() => { navigate('/about-me'); toggleMenuClose(); }}>About Me</StyledMenuItem>
                        <StyledMenuItem onClick={toggleMenuClose}>Resume</StyledMenuItem>
                        <StyledMenuItem onClick={toggleMenuClose}>Hit Me Up!</StyledMenuItem>
                    </StyledMenu>)
                }
            </NavigationAppBar>
        </>
     );
}

export default Navbar;