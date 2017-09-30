import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PeopleList from '../../../../src/app/components/PeopleList';

describe('<PeopleList />', () => {
  describe('render()', () => {
    test('should render without people list', () => {
      const wrapper = shallow(<PeopleList people={[]} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    test('should render correctly', () => {
      const people = [
        { name: 'John', age: 30, gender: 'male' },
      ];
      const wrapper = shallow(<PeopleList people={people} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
