import React from 'react';
import {shallow, render} from "enzyme";
import {Clock} from './Clock';

const fn = jest.fn;

describe("<Clock/>", () => {
    const wrapper = shallow(<Clock render={fn}/>);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});

describe('Clock functionality:', () => {
    it("Returns current hours, minutes, seconds:", () => {
        const wrapper = shallow(<Clock render={fn}/>);

        const now = new Date();
        const instance = wrapper.instance();

        expect(instance.getTime()).toEqual({
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        })
    })
});