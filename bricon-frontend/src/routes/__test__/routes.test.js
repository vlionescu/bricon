import React from 'react';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
    ArticlesRoute,
    HomeRoute,
    InstructionsRoute,
    NotFoundRoute,
    ProductsRoute,
    DownloadsRoute,
} from '../index';

configure({adapter: new Adapter()});

test('ArticlesRoute should render', () => {
    const wrapper = mount(<ArticlesRoute/>);

    expect(wrapper.exists()).toBe(true);
});

test('HomeRoute should render', () => {
    const wrapper = mount(<HomeRoute/>);

    expect(wrapper.exists()).toBe(true);
});

test('InstructionsRoute should render', () => {
    const wrapper = mount(<InstructionsRoute/>);

    expect(wrapper.exists()).toBe(true);
});

test('NotFoundRoute should render', () => {
    const wrapper = mount(<NotFoundRoute/>);

    expect(wrapper.exists()).toBe(true);
});

test('ProductsRoute should render', () => {
    const wrapper = mount(<ProductsRoute/>);

    expect(wrapper.exists()).toBe(true);
});

test('SoftwareRoute should render', () => {
    const wrapper = mount(<DownloadsRoute/>);

    expect(wrapper.exists()).toBe(true);
});
