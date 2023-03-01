// 修改密码的校验规则
export const MODE_MAP_RULES = {
  simple: [
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
  complex: [
    { required: true, message: "请输入新密码" },
    {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/g,
      message: "请输入正确格式的密码",
    },
    {
      min: 8,
      max: 18,
      message: "请输入8-18个字符",
    },
  ],
};

// 修改密码的校验规则文案
export const MODE_MAP_TEXT = {
  simple: "6-18个字符，不允许有空格及特殊字符",
  complex: "8-18个字符，密码必须包含英文大小写、数字，并且不少于8位",
};
