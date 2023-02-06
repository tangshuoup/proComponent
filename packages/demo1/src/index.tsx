/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-01-30 14:42:38
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-06 14:03:02
 */
import React, { useState } from 'react';
import './index.less';

const Demo = () => {
  const [boolean, setBoolean] = useState('222');
  return (
    <div className="demo">
      2gdg
      <span className="child" onClick={() => setBoolean('333')}>
        {boolean ?? 'rerdddddd'}
      </span>
    </div>
  );
};
export { Demo };
export default Demo;
