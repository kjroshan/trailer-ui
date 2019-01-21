
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
// import sinon from 'sinon';
import MovieList from '../dashboard/movie-list';


configure({ adapter: new Adapter() });

describe('<MovieList/>', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<MovieList />);
        expect(wrapper.find('div').length).to.equal(0);
    });
});

