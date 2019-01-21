
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Footer from '../common/footer';


configure({ adapter: new Adapter() });

describe('<Footer/>', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('nav').length).to.equal(1);
    });
});

