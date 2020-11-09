import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

interface Props {
}

export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar>
            <Typography variant="h6">Scroll to Elevate App Bar</Typography>
        </AppBar>
    </React.Fragment>
  );
}
