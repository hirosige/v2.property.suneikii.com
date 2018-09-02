/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import PSButton from '../components/button';

describe('Can Use Button', () => {
  it('App shows "Hello world!"', () => {
    const name = 'Hiroshige';
    const button = shallow(<PSButton name={name} />);

    expect(button.find('button').text()).toEqual(`Material! ${name}`);
    expect(button.find('div.desc').text()).toEqual('in Testing');
  });
});
