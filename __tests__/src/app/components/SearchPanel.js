import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchPanel from '../../../../src/app/components/SearchPanel';

describe('<SearchPanel />', () => {
  describe('render()', () => {
    test('should render correctly', () => {
      const wrapper = shallow(<SearchPanel search={jest.fn()} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });
});
