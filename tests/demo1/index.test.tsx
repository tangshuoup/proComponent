/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-07 17:14:19
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-08 11:51:33
 */
import React from 'react';
import { Demo } from '@tangshuo/pro-components';
import { render } from '@testing-library/react';

describe('Demo', () => {
  it('demo', async () => {
    const wrapper = render(<Demo></Demo>);
    expect(!!wrapper.baseElement.querySelector<HTMLDivElement>('.demo')).toBeTruthy();
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
