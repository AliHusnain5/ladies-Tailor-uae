// Header.js
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Talor.css"; // Import the CSS file
import photo1 from "./images/R (1).jpeg";
import photo2 from "./images/woman-tailor-working-sewing-factory_1303-15837.avif";
import { useNavigate } from "react-router-dom" ;
import MatirlaUi from "./MatirlaUi";
import Text from "./Text";
// import WhatsApp from "./Whatsapp";

const photos = [photo1, photo2];

const Header = ({ isServicesPage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [openPrivacyDialog, setOpenPrivacyDialog] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    window.open('https://wa.me/qr/A7KCKZKKWINSN1', '_blank');
  };

  const handleNavigation = (path) => () => navigate("/Services");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePrivacyDialogOpen = () => {
    setOpenPrivacyDialog(true);
  };

  const handlePrivacyDialogClose = () => {
    setOpenPrivacyDialog(false);
  };

  const isMenuOpen = Boolean(anchorEl);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      <div className="header-container" id="Home" >
        <AppBar position="static" className="app-bar" style={{ backgroundColor: isServicesPage ? 'white' : 'default' }}>
          <Toolbar className="toolbar">
            <Box className="top-bar">
              <div className="nav-item">Blog</div>
              <div className="nav-item">About Us</div>
            </Box>
            <Box className="top-bar">
              <div className="icon">
                <FaFacebook />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <AiOutlineYoutube />
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <div className="home-top">
          <div className="home-div">
            <div className="logo-div"></div>
            <div className="call-us"  onClick={handleClick}>
              <Button variant="contained" className="btn">
                Call Us: +971-52-2277110
              </Button>
            </div>
          </div>
          <hr className="divider" />
          <div className="button-main">
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className="menu-button"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>HOME</MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#About">ABOUT US</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>SERVICES</MenuItem>
                  <MenuItem onClick={handleMenuClose}>SHOP</MenuItem>
                  <MenuItem onClick={handleMenuClose}>BLOG</MenuItem>
                  <MenuItem onClick={handlePrivacyDialogOpen}>
                    CONTACTS
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className="buttons">
                <div className="button" >HOME</div>
                <div className="button">
                  <a href="#About">ABOUT US</a>
                </div>
                <div className="button" onClick={handleNavigation("/Services")}>
                  SERVICES
                </div>
                <div className="button">SHOP</div>
                <div className="button">BLOG</div>
                <div className="button" onClick={handlePrivacyDialogOpen}>
                  CONTACTS
                </div>
              </div>
            )}
          </div>
        </div> 
        <div className="dev-one"><MatirlaUi/>

        <Text/>
        </div>
      </div>


      <Dialog open={openPrivacyDialog} onClose={handlePrivacyDialogClose}>
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogTitle>Return Policy</DialogTitle>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrivacyDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
