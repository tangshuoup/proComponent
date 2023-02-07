/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-01-30 14:42:38
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-07 10:31:14
 */
import React, { useState } from 'react';
import './index.less';

const Demo = () => {
  const [boolean, setBoolean] = useState(22);
  return (
    <div className="demo">
      2gdg
      <span className="child" onClick={() => setBoolean(Math.random())}>
        {boolean ?? 'rerdddddd'}
      </span>
    </div>
  );
};
export { Demo };
export default Demo;
