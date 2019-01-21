
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import Header from '../common/header';


configure({ adapter: new Adapter() });

describe('<Header/>', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('nav').length).to.equal(1);
    });
});

