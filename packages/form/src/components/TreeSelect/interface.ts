export type TreeData = {
  key: string;
  value: string;
  title: string;
  parentKey: string;
  sorter?: boolean;
  children?: TreeData[];
};

export type TreeDataProps = TreeData[];

export interface MultipleSelectProps {
  /** 标签 */
  label?: string;
  /** 是否隐藏标签 */
  hideLabel?: boolean;
  /** 树下拉框列表 */
  tree?: Array<any>;
  /** 是否展示搜索框，个数较少的下拉框可以隐藏此项 */
  showSearch?: boolean;
  /** 选择框宽度 */
  width?: number;
  /** 下拉框相关属性 */
  dropProps?: {
    /** 下拉框宽度，默认不传，跟选择框保持同宽 */
    width?: number;
  };
  /** 自定义类名 */
  className?: string;
  /** 自定义下拉菜单类名 */
  popupClassName?: string;
  /** 选择回调函数 */
  onSelect?: (keys: TreeDataProps) => void;
  /** 占位文字 */
  placeholder?: string;
  /** 传入的子节点code */
  checkKeys?: Array<string | number>;
  /** 搜索框的占位提示信息 */
  searchPlaceholder?: string;
}
