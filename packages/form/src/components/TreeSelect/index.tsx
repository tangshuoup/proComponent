import React, { useMemo, useRef } from "react";
import { Input } from "@firesoon/ant-ui";
import { Icon, Popover } from "@firesoon/antd";
import { AntTreeNodeCheckedEvent } from "@firesoon/antd/lib/tree";
import { useSize, useSetState, useDeepCompareEffect } from "ahooks";
import { remove } from "lodash";
import classNames from "classnames";

import { MultipleSelectProps, TreeDataProps } from "./interface";
import { addArr, editArr, includeArr, treeToArray } from "./config";
import Tree from "./components/Tree";
import "./index.less";

const Index: React.FC<MultipleSelectProps> = ({
  label = "",
  hideLabel = false,
  tree = [],
  checkKeys = [],
  showSearch = true,
  width,
  dropProps,
  className = "",
  popupClassName = "",
  placeholder = "全部",
  searchPlaceholder = "请输入名称",
  onSelect,
}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<any>(null);

  const size = useSize(inputRef);

  const [{ treeData, checkedList, allCheckedNodes, visible, inCheckKeys, touchChecked }, setState] = useSetState<any>({
    visible: false,
    checkedList: [],
    allCheckedNodes: [], // 所有被全选的父子节点关系集合
    inCheckKeys: [], // 选中的keys
    touchChecked: false,
    treeData: [],
  });

  function getCheckedData(checkedList: TreeDataProps, allCheckedNodes: TreeDataProps) {
    // 全选的父节点下的子节点合集
    let allCheckedChild: TreeDataProps = [];

    allCheckedNodes.forEach((node) => {
      if (node?.children && node.children?.length > 0) {
        allCheckedChild = allCheckedChild.concat(node.children);
      }
    });
    // 格式化展示数据，全选只展示父级
    const showNodes = remove([...checkedList], (item) => {
      return !allCheckedChild.find((n) => n.key === item.key);
    });
    // 格式化选中结果，只保留子级
    const checkedChildren = remove([...checkedList], (item) => {
      return !allCheckedNodes.find((n) => n.key === item.key);
    });

    return {
      showNodes,
      checkedChildren,
    };
  }

  // 展示选中的节点、格式化之后的回调传参
  const { showNodes, checkedChildren } = useMemo(() => {
    return getCheckedData(checkedList, allCheckedNodes);
  }, [checkedList, allCheckedNodes]);

  const formatCheckedData = (tree: TreeDataProps, inCheckKeys: string[]) => {
    const treeList = treeToArray(tree);
    /** 所有选择的item */
    const childItem = treeList.filter((item) => inCheckKeys.includes(item.key));
    /** 子项全部选择的第一节点item */
    const all: TreeDataProps = [];

    tree.forEach((item) => {
      if (item.children && item.children?.length > 0) {
        const keys = item.children.map((child) => child.key);
        if (includeArr(inCheckKeys, keys)) {
          addArr(all, item);
          addArr(childItem, item);
        }
      }
    });

    setState({
      checkedList: childItem,
      allCheckedNodes: all,
    });
  };

  /** 对选中项进行排序置顶 */
  const loopSort = (checked: any[]) => {
    const selectKeys = checked?.map((i) => i.key ?? i);
    if (!selectKeys?.length) {
      setState({
        treeData: tree,
      });
      return;
    }
    const sort = (data: TreeDataProps) => {
      const selectedList = data.filter((item) => selectKeys.includes(item.key) || item?.sorter);
      const notSelectedList = data.filter((item) => !selectKeys.includes(item.key) && !item?.sorter);
      return [...selectedList, ...notSelectedList];
    };

    /** 判断是否选中并赋值sorter */
    const loop = (data: TreeDataProps) => {
      data?.forEach((item) => {
        if (item.children?.length) {
          if (item.children.filter((i: any) => selectKeys.includes(i.key))?.length) {
            item.children = sort(item.children);
            item.sorter = true;
          } else {
            item.sorter = false;
          }
          loop(item.children);
        }
      });
    };

    loop(tree);
    setState({
      treeData: [...sort(tree)],
    });
  };

  useDeepCompareEffect(() => {
    setState({
      inCheckKeys: checkKeys ?? [],
    });
  }, [checkKeys]);

  useDeepCompareEffect(() => {
    formatCheckedData(tree, inCheckKeys);
  }, [tree, inCheckKeys]);

  useDeepCompareEffect(() => {
    loopSort(checkKeys);
  }, [tree]);

  const clearSelect = () => {
    setState({
      checkedList: [],
      inCheckKeys: [],
    });
    onSelect?.([]);
  };

  const handleSelect = (v: boolean) => {
    // TODO: 是否可以合并成一个判断？
    if (!v) {
      if (touchChecked) {
        onSelect?.(checkedChildren);
      }
      loopSort(checkedChildren);
    }

    // ! ???
    searchRef?.current?.setValue("");

    setState({
      visible: v,
      touchChecked: !v,
    });
  };

  const onCheck = (_: any, info: AntTreeNodeCheckedEvent) => {
    const {
      checked,
      node: { props },
    } = info;
    const parentKeys = tree.filter((item) => item.children?.length > 0).map((item) => item.key);
    const { eventKey, parentKey } = props;
    const keys = [...inCheckKeys];

    if (!parentKeys.includes(eventKey)) {
      editArr(keys, eventKey, checked);

      if (!checked) {
        editArr(keys, parentKey, checked);
      }
    } else {
      const parentItem = tree.find((item) => item.key === eventKey);

      parentItem.children.forEach((p: Record<string, any>) => {
        editArr(keys, p.key, checked);
      });
    }

    setState({
      inCheckKeys: keys,
      touchChecked: true,
    });
  };

  const selectNames = useMemo(() => {
    return showNodes.map((item) => item.title);
  }, [showNodes]);

  const options = (
    <div className="fs-multiple-select-opts-content">
      <Tree
        treeData={treeData}
        checkedList={checkedList}
        showSearch={showSearch}
        onCheck={onCheck}
        visible={visible}
        searchPlaceholder={searchPlaceholder}
        searchRef={searchRef}
      />
    </div>
  );

  return (
    <div className={classNames("fs-multiple-select-wrap", className)}>
      {!hideLabel && label && (
        <label htmlFor="" className="fs-multiple-select-wrap-label">
          {label}
        </label>
      )}

      <div className={classNames("fs-multiple-select")} title={selectNames.join("，")}>
        <Popover
          content={options}
          trigger="click"
          overlayStyle={{ width: dropProps?.width ? dropProps?.width : size?.width ?? width }}
          overlayClassName={classNames("fs-multiple-select-opts", popupClassName)}
          onVisibleChange={handleSelect}
          getPopupContainer={() => document.body}
          placement="bottomLeft"
        >
          <div ref={inputRef}>
            <Input
              allowClear
              className="fs-multiple-select-show"
              disabled
              suffix={
                <Icon
                  type="down"
                  className={classNames({
                    "fs-icon-up": visible,
                    "fs-icon-down": !visible,
                    selected: !!selectNames.length,
                  })}
                />
              }
              value={selectNames.join("，")}
              placeholder={placeholder}
              style={{
                width,
              }}
            />
          </div>
        </Popover>

        {selectNames.length > 0 && (
          <Icon type="close-circl1e" theme="filled" className="fs-multiple-select-clear" onClick={clearSelect} />
        )}
      </div>
    </div>
  );
};

export default Index;
