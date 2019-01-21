
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import MovieInfo from '../../containers/movie-info';


configure({ adapter: new Adapter() });

describe('<MovieInfo/>', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<MovieInfo youtubeVideoId="something" fetchTrailer={() => {}} />);
        expect(wrapper.find('div').length).to.equal(0);
    });
});

