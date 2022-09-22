import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import Dotmenu from '../dot_menu/Dot_menu'
import  '../dot_menu/h.css';

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    // flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right1: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    color: "white"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
     cursor:'pointer'
  },

  linkSecondary: {
    color: "white",
  },

  drop:{
    marginRight: theme.spacing(10)
  },

  /* This is added to provide CSS to the Drop-Down menu */

   linkSecondaryOne: {
    color: "black",
  },



roottwo: {
  
  fontSize: 16,
  display: "flex",
  flexDirection:"column",
  marginTop: theme.spacing(7),
},
});

function AppAppBar(props) {
  const { classes } = props;


  /*The following code has been added to get dropdown menu*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const [anchorE, setAnchorE] = React.useState(null);

 
  const openR = Boolean(anchorE);
  const handleClickRecruiter = (event) => {
    setAnchorE(event.currentTarget);
  };
  const handleCloseRecruiter = () => {
    setAnchorE(null);
  };



  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={RouterLink}
            to="/"
          >
            Menu
          </Link>

          <div className={classes.right1}>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              component={RouterLink}
              to="/myrequest"
            >
              Request Table
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              component={RouterLink}
              to="/contactus"
            >
              Contact Us
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              component={RouterLink}
              to="/userprofile"
            >
              UserProfile
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              component={RouterLink}
              to="/requirementform"
            >
              Requirement Form
            </Link>
            {"  "}
            {localStorage.getItem("regtoken") == null ? 
              
              <>             
              <Link
                id="demo-positioned-button"
                underline="none"
                variant="h6"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={clsx(classes.rightLink, classes.linkSecondary)}
              >
                JOBSEEKERS
              </Link>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className={clsx( classes.roottwo)}
                anchorOrigin={{vertical: 'center', horizontal: 'center'}}
                transformOrigin={{
                  vertical: 'center', horizontal: 'center'
                }} 


              >
              <MenuItem onClick={handleClose}><Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={clsx( classes.linkSecondaryOne)}
                      component={RouterLink}
                      to="/signin"
                    >
                      Sign In
                    </Link></MenuItem>
                <MenuItem onClick={handleClose}><Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={clsx( classes.linkSecondaryOne)}
                      component={RouterLink}
                      to="/signup"
                    >
                      Sign Up
                    </Link> </MenuItem>
              </Menu>
      
              <Link       
                aria-controls={openR ? "demo-positioned-menuone" : undefined}
                aria-haspopup="true"
                underline="none"
                variant="h6"
                aria-expanded={openR ? "true" : undefined}
                onClick={handleClickRecruiter}
                className={clsx(classes.rightLink, classes.linkSecondary)}    
              >
                RECRUITERS
              </Link>
              <Menu
                id="demo-positioned-menuone"
                anchorEl={anchorE}
                open={Boolean(anchorE)}
                onClose={handleCloseRecruiter}
                anchorOrigin={{vertical: 'center', horizontal: 'center'}}
                transformOrigin={{
                  vertical: 'center', horizontal: 'center'
                }}  
                className={clsx( classes.roottwo)}
              >
              <MenuItem onClick={handleCloseRecruiter}><Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={clsx( classes.linkSecondaryOne)}
                      component={RouterLink}
                      to="/companylogin"
                    >
                      Sign In
                    </Link></MenuItem>
                <MenuItem onClick={handleCloseRecruiter}><Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={clsx( classes.linkSecondaryOne)}
                      component={RouterLink}
                      to="/companysignup"
                    >
                      Sign Up
                    </Link> </MenuItem>
                </Menu>          
                      </> : 
                      <>
                      <Link className={classes.drop}>
                    </Link>
                    <Dotmenu />
                      </>
                    }
                  </div>
                </Toolbar>
              </AppBar>
              <div className={classes.placeholder} />
            </div>
          );
        }

        AppAppBar.propTypes = {
          classes: PropTypes.object.isRequired,
        };

        export default withStyles(styles)(AppAppBar);




      
