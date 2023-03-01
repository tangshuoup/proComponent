import React, { useState, useEffect } from "react";
import { FormComponentProps } from "@firesoon/antd/lib/form";
import { Modal, Form, Button, Row, Col, Input } from "@firesoon/antd";
import { MODE_MAP_RULES, MODE_MAP_TEXT } from "./config";
import { CustomRules } from "../../interface";
import "./index.less";

interface ChangePasswordProps extends FormComponentProps {
  visible: boolean;
  msg?: string;
  firstLogin?: boolean;
  onCancel: () => void;
  onOk: (params?: any) => void;
  loading?: boolean;
  validateMode?: "simple" | "complex" | CustomRules;
}

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const { Password } = Input;

const ChangePassword = ({
  msg = "",
  visible,
  firstLogin = false,
  onCancel,
  onOk = () => {},
  loading = false,
  form: { getFieldDecorator, validateFieldsAndScroll, getFieldsValue },
  validateMode = "simple",
}: ChangePasswordProps) => {
  const [errorMsg, setErrorMsg] = useState<string>(msg);
  const text = typeof validateMode === "string" ? MODE_MAP_TEXT[validateMode] : validateMode["text"];
  const rules = typeof validateMode === "string" ? MODE_MAP_RULES[validateMode] : validateMode["rules"];

  useEffect(() => {
    setErrorMsg(msg);
  }, [msg]);

  const compareToFirstPassword = (_: any, value: any, callback: (arg0?: string) => void) => {
    let { newPassword } = getFieldsValue(["newPassword"]);
    if (newPassword && newPassword !== value) {
      callback("两次密码输入不一致");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (_: any, value: any, callback: (arg0?: string) => void) => {
    let { oldPassword } = getFieldsValue(["oldPassword"]);
    if (oldPassword && value === oldPassword) {
      callback("不能与旧密码相同");
    } else {
      callback();
    }
  };

  const handleOk = () => {
    validateFieldsAndScroll((errors) => {
      if (errors) return;
      const params = getFieldsValue(["oldPassword", "newPassword"]);

      onOk(params);
    });
  };

  return (
    <Modal
      title="修改密码"
      visible={visible}
      onCancel={onCancel}
      destroyOnClose={true}
      maskClosable={false}
      wrapClassName="fs-header-changePwd"
      footer={
        <>
          <Button onClick={onCancel}>{firstLogin ? "以后再说" : "取消"}</Button>
          <Button type="primary" onClick={handleOk} loading={loading}>
            确定
          </Button>
        </>
      }
    >
      <p className="fs-header-warnTip">{firstLogin && "为了您的信息安全，建议您修改初始密码"}</p>

      <Form layout="horizontal" {...formLayout}>
        <Form.Item label="请输入旧密码">
          {getFieldDecorator("oldPassword", {
            rules: [
              {
                required: true,
                message: "请输入当前密码",
              },
            ],
          })(<Password placeholder="请输入当前密码" onChange={() => setErrorMsg("")} />)}
          {errorMsg && <p className="fs-header-errorTip">{errorMsg}</p>}
        </Form.Item>
        <Form.Item label="请输入新密码">
          {getFieldDecorator("newPassword", {
            validateTrigger: "onBlur",
            validateFirst: true,
            rules: [...rules, { validator: validateToNextPassword }],
          })(<Password placeholder="请输入新密码" />)}
        </Form.Item>
        <Form.Item label="请确认新密码">
          {getFieldDecorator("rePassWord", {
            validateTrigger: "onBlur",
            validateFirst: true,
            rules: [
              {
                ...rules,
                validator: compareToFirstPassword,
              },
            ],
          })(<Password placeholder="请确认新密码" />)}
        </Form.Item>
      </Form>
      <Row className="fs-header-validateTip">
        <Col span={16} offset={6}>
          <p>密码格式要求：</p>
          <p>{text}</p>
        </Col>
      </Row>
    </Modal>
  );
};

export default Form.create<ChangePasswordProps>()(ChangePassword);
