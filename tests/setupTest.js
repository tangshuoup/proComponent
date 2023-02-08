/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-07 16:32:39
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-07 17:06:45
 */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

Enzyme.configure({ adapter: new Adapter() });
