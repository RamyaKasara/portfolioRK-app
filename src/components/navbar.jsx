import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, styled } from "@mui/material/styles";
import { Menu, MenuItem, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const NavigationAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary,
}))

const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        backgroundColor: theme.palette.background.secondary, // Secondary background color
        color: theme.palette.text.primary, // Primary text color
        opacity: 0.8, // Opacity of the menu
    },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.background.primary, 
    },
}))


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


    return ( 
        <>
            <NavigationAppBar position="sticky">
                <Toolbar>
                    { isMobile &&
                        (<IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleMenuOpen}
                            sx={{ mr: 2, cursor: "pointer"}}
                        >
                            <MenuIcon />
                        </IconButton>)}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Ramya's Portfolio
                    </Typography>
                    {   !isMobile &&
                        (<>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Contact</Button>
                        </>)
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
                        <StyledMenuItem onClick={toggleMenuClose}>Home</StyledMenuItem>
                        <StyledMenuItem onClick={toggleMenuClose}>About</StyledMenuItem>
                        <StyledMenuItem onClick={toggleMenuClose}>Contact</StyledMenuItem>
                    </StyledMenu>)
                }
            </NavigationAppBar>
        </>
     );
}

export default Navbar;