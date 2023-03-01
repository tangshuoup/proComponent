/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-13 15:58:14
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-14 10:42:20
 */
import React, { useState } from "react";
import { Header } from "@firesoon/pro-components";
import logo from "../../../assets/logo_app.svg";
export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const customRules = {
    text: "自定义文案提示",
    rules: [
      { required: true, message: "请输入新密码" },
      {
        pattern: /^[0-9a-zA-Z]*$/g,
        message: "请输入正确格式的密码",
      },
      {
        min: 6,
        max: 18,
        message: "请输入6-18个字符",
      },
    ],
  };

  const onSavePsw = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 1000);
  };

  return (
    <>
      <Header
        logo={logo}
        user={{
          name: "王晓明",
        }}
        isSys={true}
        hideRoles={false}
        pswOptions={{
          loading,
          visible,
          setVisible,
          validateMode: customRules,
          onSavePsw,
        }}
      />
    </>
  );
};
