/**
 * 全局表单配置
 */
export const globalFormConfig = {
  /** 校验出错时的提示中文化 */
  validateMessages: {
    required: '请输入${label}',
  },
};

/**
 * 统一表单格式
 */
export const commonFormLayout = {
  labelCol: { span: 3 },
  colon: false,
};

/**
 * 通用的表单默认值
 */
export const formInitialValues = {
  state: 1,
};
