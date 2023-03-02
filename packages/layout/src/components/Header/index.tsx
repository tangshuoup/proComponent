import React, { FC, useState } from "react";
import { Icon, Dropdown, Menu, Select, Modal } from "@firesoon/antd";
import classnames from "classnames";
import { HeaderP } from "./interface";
import { Admin } from "@firesoon/icons-react";
import Info from "./components/Info";
import ChangePassword from "./components/ChangePassWord";
import FsLogo from "./components/FsLogo";

import "./index.less";

const { Option } = Select;

const Header: FC<HeaderP> = ({
  onBackTo,
  onChangeRole,
  onLogout,
  onShowVersion,
  onChangeHos,
  logo,
  isSys = false,
  isMoreHosptial = false,
  version = "",
  backText = "返回应用平台页面",
  changeText = "返回应用平台切换院区",
  hosName = "",
  user,
  hideRoles = false,
  roles = [],
  roleKey,
  dropMenu,
  showUserInfo = true,
  showChangePsw = true,
  userInfo,
  pswOptions = {
    loading: false,
    visible: false,
    errorMsg: "",
    validateMode: "simple",
    setVisible: () => {},
    onSavePsw: () => {},
  },
  addedMenus = [],
  isMultiAgency = false,
  hideMultiCampusAll = false,
  hospitalInfoVos = [],
  hospitalId = "-1",
  messageBox = null,
}) => {
  const [infoVisible, setInfoVisible] = useState(false);
  const { loading, visible, errorMsg, validateMode, setVisible, onSavePsw, onCancel } = pswOptions;

  const showLogoutModal = () => {
    Modal.confirm({
      title: "确定要退出登录吗？",
      onOk: onLogout,
      okButtonProps: {
        type: "danger",
      },
    });
  };

  const menu = dropMenu || (
    <Menu>
      {showUserInfo && (
        <Menu.Item className="auto-track-inner-text" onClick={() => setInfoVisible(true)}>
          用户信息
        </Menu.Item>
      )}

      {showChangePsw && (
        <Menu.Item className="auto-track-inner-text" onClick={() => setVisible(true)}>
          修改密码
        </Menu.Item>
      )}

      {version && (
        <Menu.Item onClick={onShowVersion} className={onShowVersion ? "" : "unClickable"}>
          {version}
        </Menu.Item>
      )}

      {addedMenus.map((item, index) => (
        <Menu.Item key={index} onClick={item.click}>
          {item.label}
        </Menu.Item>
      ))}

      <Menu.Item className="auto-track-inner-text" onClick={showLogoutModal}>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="fs-header">
      <div className="fs-logo">
        <FsLogo
          {...{
            isSys,
            isMoreHosptial,
            isMultiAgency,
            hideMultiCampusAll,
            logo,
            backText,
            hosName,
            hospitalInfoVos,
            hospitalId,
            changeText,
            onBackTo,
            onChangeHos,
          }}
        />
      </div>

      <div className="fs-user">
        <Admin style={{ fontSize: 16 }} />
        <span className="fs-user-name">{userInfo?.actualName ?? user?.name}</span>

        {!isSys && !hideRoles && (
          <Select
            style={{ width: 150, marginLeft: 16 }}
            className="fs-user-roles"
            onChange={onChangeRole}
            value={roleKey}
            dropdownClassName="fs-user-roles-drop"
          >
            {roles.map((item) => (
              <Option key={item.value} value={item.value} title={item.name} data-log-value="角色权限选择">
                {item.name}
              </Option>
            ))}
          </Select>
        )}

        {/* 消息盒子 */}
        {messageBox}

        <Dropdown
          overlay={menu}
          overlayClassName="fs-header222-drop"
          overlayStyle={{ width: 120 }}
          placement="bottomRight"
        >
          <span className={classnames("fs-user-icon", { "fs-user-isNotice": messageBox })}>
            <Icon style={{ fontSize: 18 }} type="ellipsis" />
          </span>
        </Dropdown>
      </div>

      {infoVisible && <Info visible={infoVisible} data={userInfo} onCancel={() => setInfoVisible(false)} />}

      {visible && (
        <ChangePassword
          visible={visible}
          onCancel={onCancel ? onCancel : () => setVisible(false)}
          onOk={onSavePsw ?? (() => {})}
          msg={errorMsg}
          loading={loading}
          firstLogin={userInfo?.firstLogin}
          validateMode={validateMode}
        />
      )}
    </div>
  );
};

export default Header;
