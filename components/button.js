// @flow

import React from 'react';
import Button from '@material-ui/core/Button';

function getName(name: string): string {
  return `Material! ${name}`;
}

type Props = {
  name: string
}

const PSButton = (props: Props) => {
  const { name } = props;

  return (
    <div>
      <Button variant="contained" color="primary" className="test">
        {getName(name)}
      </Button>
      <button type="button" className="test">Styled JSX</button>

      <style jsx>
        {`
          button.test {
            border-radius: 0;
            margin: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default PSButton;
