/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-14 16:21:08
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-15 09:32:41
 */
import React from "react";
import { Modal, Button } from "@firesoon/antd";
import "./info.less";

interface StaticProps {
  visible: boolean;
  data: any;
  onCancel: () => void;
}

const SinglePanel = (props: { name: string; value: string }) => {
  return (
    <div className="fs-header-userInfo-panelContent">
      <label>{props.name}</label>
      <p>{props.value}</p>
    </div>
  );
};

export default function (props: StaticProps) {
  const { visible, data, onCancel } = props;
  return (
    <Modal title="用户信息" visible={visible} onCancel={onCancel} footer={<Button onClick={onCancel}>关闭</Button>}>
      <div className="fs-header-userInfo">
        <SinglePanel name="员工号" value={data?.employeeCode} />
        <SinglePanel name="姓名" value={data?.actualName} />
        <SinglePanel name="所属医院" value={data?.hospitalName} />
        <SinglePanel name="所属科室" value={data?.departmentName} />
        <div className="fs-header-userInfo-tip">
          <p>若有信息错误，请及时联系系统管理员修改</p>
        </div>
      </div>
    </Modal>
  );
}
