
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import MainComponent from './main';


configure({ adapter: new Adapter() });

describe('<MainComponent/>', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<MainComponent />);
        expect(wrapper.find('Provider').length).to.equal(1);
    });
});

