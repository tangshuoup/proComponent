import React, { ReactNode } from "react";

interface User {
  name: string;
  id?: string;
}

interface Role {
  name: string;
  value: string | number;
}

interface UserInfo {
  [propName: string]: any;
  /** 用户名 */
  actualName: string;
  /** 员工号 */
  employeeCode: string;
  /** 所属医院 */
  hospitalName: string;
  /** 所属科室 */
  departmentName: string;
  /** 是否首次登陆，首次登陆会提示修改密码 */
  firstLogin?: boolean;
}

export interface CustomRules {
  /** 提示文案 */
  text: string;
  /** 自定义规则 */
  rules: Array<object>;
}

interface PswOptions {
  /** 修改密码的确定按钮loading效果，默认false */
  loading?: boolean;
  /** 控制密码框的展示和隐藏, 默认为false **/
  visible: boolean;
  /** 修改密码的错误提示信息，默认'' */
  errorMsg?: string;
  /** 修改密码规则校验模式，默认为 'simple'， 也可以传自定义规则 */
  validateMode?: "simple" | "complex" | CustomRules;
  /** 修改visible的值 **/
  setVisible: (visible: boolean) => void;
  /** 修改密码 */
  onSavePsw?: (params: any) => void;
  /** 修改密码的取消按钮回调，可以不传，不传的时候默认关闭弹窗 */
  onCancel?: () => void;
}

interface hospitalItem {
  /** 院区code */
  id?: number;
  /** 院区名称 */
  hospitalName?: string;
}

/**
 * Header Api
 */
export interface HeaderP {
  /** logo图片 */
  logo: string;
  /** 院区名 */
  hosName?: string;
  /** 用户信息，包括 name(必需) 和 id ， 注： 1.5以后可以不传，只穿userInfo 即可 */
  user?: User;
  /** 用户信息 */
  userInfo?: UserInfo;

  /** 用户角色列表 */
  roles?: Array<Role>;
  /** 用户当前选择的角色 */
  roleKey?: string | number;
  /** 隐藏用户角色切换 */
  hideRoles?: boolean;
  /** 应用版本号 */
  version?: string;
  /** 返回应用平台页面 */
  backText?: string;
  /** 返回应用平台切换院区 */
  changeText?: string;
  /** 下拉菜单 */
  dropMenu?: ReactNode;

  /** 返回应用平台 */
  onBackTo?: () => void;
  /** 退出登录 */
  onLogout?: () => void;
  /** 切换身份 */
  onChangeRole?: (value: any, option: React.ReactElement<any> | React.ReactElement<any>[]) => void;
  /** 修改密码 */
  onChangePsw?: () => void;
  /** 显示系统更新说明等, 不传则版本信息为文本，没有交互 */
  onShowVersion?: () => void;
  /** 切换院区 */
  onChangeHos?: (value: number) => void;

  /** 是否是应用平台的页头，默认为false */
  isSys?: boolean;
  /** 是否是多院区, 默认为false */
  isMoreHosptial?: boolean;
  /** 是否多机构 */
  isMultiAgency?: boolean;
  /** 是否隐藏多院区的全部选项 */
  hideMultiCampusAll?: boolean;
  /** 是否显示用户信息下拉，默认为true */
  showUserInfo?: boolean;
  /** 是否显示用户修改密码下拉，默认为true */
  showChangePsw?: boolean;
  /** 修改密码modal的相关配置 */
  pswOptions?: PswOptions;
  /** 自定义菜单列表 */
  addedMenus?: Array<Menu>;
  /** 选中院区code, 全部为-1 */
  hospitalId?: number;
  /** 院区下拉列表 */
  hospitalInfoVos?: Array<hospitalItem>;
  /** 消息盒子 */
  messageBox?: React.ReactElement<any>;
}

interface Menu {
  label: string;
  click: (params?: any) => void;
}
