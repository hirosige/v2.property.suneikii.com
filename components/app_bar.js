import React from 'react';
/* eslint import/no-extraneous-dependencies: 0 */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const PSunikiiAppBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            SUNEIKII.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

PSunikiiAppBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(PSunikiiAppBar);
