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
    boxShadow: 'none', 
}))

const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        backgroundColor: theme.palette.background.primary, // Secondary background color
        color: theme.palette.text.primary, // Primary text color
        opacity: 0.8, // Opacity of the menu,
        boxShadow: 'none', // Remove box shadow
    },
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.background.primary, 
    },
}))

const TagButton = styled(Button)(({ theme }) => ({
  borderRadius: '16px',
  padding: '4px 12px',
  border: `1px solid ${theme.palette.background.tertiary}`,
  textTransform: 'none',
  fontWeight: 'bold',
  backgroundColor: theme.palette.background.tertiary,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  color: theme.palette.background.primary,
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


    return ( 
        <>
            <NavigationAppBar position="sticky" style={{flexShrink: 0}}>
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
                        variant="h3"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: '600', fontFamily: "Old Standard TT" }}
                    >
                        Ramya Kasara
                    </Typography>
                    {   !isMobile &&
                        (<>
                            <Button color="inherit">About Me</Button>
                            <Button color="inherit">Resume</Button>
                            <TagButton color="inherit">Hit Me Up!</TagButton>
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
                        <StyledMenuItem onClick={toggleMenuClose}>About Me</StyledMenuItem>
                        <StyledMenuItem onClick={toggleMenuClose}>Resume</StyledMenuItem>
                        <StyledMenuItem onClick={toggleMenuClose}>Hit Me Up!</StyledMenuItem>
                    </StyledMenu>)
                }
            </NavigationAppBar>
        </>
     );
}

export default Navbar;