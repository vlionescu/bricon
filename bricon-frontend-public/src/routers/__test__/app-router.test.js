import AppRouter from '../app-router';
import React from 'react';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('should default to /home', () => {
    const wrapper = mount(<AppRouter/>);

    expect(wrapper.find('Home')).toHaveLength(1);
});
