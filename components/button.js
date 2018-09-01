// @flow

import React from 'react';
import Button from '@material-ui/core/Button';

function string(name: string): string {
  return `Material! ${name}`;
}

const PSButton = () => (
  <div>
    <Button variant="contained" color="primary">
      {string('test')}
    </Button>
  </div>
);

export default PSButton;
