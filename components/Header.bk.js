import React from 'react';
/* eslint import/no-extraneous-dependencies: 0 */
import Link from 'next/link';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';

const HeaderLink = styled.a`
  margin-right: 20px;
  font-size: 14px;
  color: ${p => (p.isActive ? '#333' : '#999')};
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid ${p => (p.isActive ? '#333' : 'transpåarent')};
  border-bottom: 1px solid ${p => (p.isActive ? '#333' : 'transparent')};
  transition: color .25s;
  font-weight: isActive ? '600' : '400';
  
  &:hover {
    color: #333;
  }
`;

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/secret', text: 'Top Secret', authRequired: true },
  { href: '/auth/sign-in', text: 'Sign In', anonymousOnly: true },
  { href: '/auth/sign-out', text: 'Sign Out', authRequired: true },
];

const getAllowedLinks = isAuthenticated => links
  .filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
  .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly));

class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  static getInitialProps({ isAuthenticated, currentUrl }) {
    return {
      isAuthenticated,
      currentUrl,
    };
  }

  handleMenu = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => this.setState({ anchorEl: null });

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const {
      isAuthenticated,
      currentUrl,
    } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              SUNEIKII.
            </Typography>
            {getAllowedLinks(isAuthenticated).map(l => (
              <Link prefetch key={l.href} href={l.href}>
                <HeaderLink isActive={currentUrl === l.href}>
                  {l.text}
                </HeaderLink>
              </Link>
            ))}
            {isAuthenticated && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.shape({
      flexGrow: PropTypes.number.isRequired,
    }).isRequired,
    grow: PropTypes.shape({
      flexGrow: PropTypes.number.isRequired,
    }).isRequired,
    menuButton: PropTypes.shape({
      marginLeft: PropTypes.number.isRequired,
      marginRight: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
