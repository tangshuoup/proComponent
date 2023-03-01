/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-07 16:32:39
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-14 16:02:08
 */
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

Enzyme.configure({ adapter: new Adapter() });
