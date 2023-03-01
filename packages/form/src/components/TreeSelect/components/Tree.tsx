import React, { useCallback, useEffect, useLayoutEffect, FC, ChangeEvent } from "react";
import { Tree, Input } from "@firesoon/antd";
import { AntTreeNodeCheckedEvent } from "@firesoon/antd/lib/tree";
import { useDebounce, useSetState } from "ahooks";
import { includesStr } from "../config";
import { TreeDataProps } from "../interface";

const { TreeNode } = Tree;

interface TreeProps {
  treeData: TreeDataProps;
  checkedList: TreeDataProps;
  showSearch: boolean;
  visible: boolean;
  searchPlaceholder: string;
  onCheck: (checkedKeys: string[] | Record<string, any>, e: AntTreeNodeCheckedEvent) => void;
  searchRef: any;
}

const Index: FC<TreeProps> = (props) => {
  const { treeData, checkedList, showSearch, visible, searchPlaceholder, onCheck, searchRef = null } = props;
  const [{ expandedKeys, search }, setState] = useSetState<any>({
    expandedKeys: [],
    search: "",
  });
  const debouncedSearch = useDebounce(search, { wait: 300 });

  useLayoutEffect(() => {
    if (visible) {
      searchRef?.current?.focus();

      setState({
        search: "",
      });
    }
  }, [visible]);

  const getTitle = (title: any, searchValue: string) => {
    if (searchValue) {
      const index = title.toUpperCase().indexOf(searchValue.toUpperCase());
      const beforeStr = title.substr(0, index);
      const afterStr = title.substr(index + searchValue.length);
      const curStr = title.substr(index, searchValue.length);

      const titleDom =
        index > -1 ? (
          <span title={title}>
            {beforeStr}
            <span className="fs-tree-search-highlight">{curStr}</span>
            {afterStr}
          </span>
        ) : (
          <span title={title}>{title}</span>
        );

      return titleDom;
    }

    return title;
  };

  const renderNode = useCallback(
    (data) => {
      return data.map((item: Record<string, any>) => {
        if (item.children?.length > 0) {
          if (
            includesStr(item.title, debouncedSearch) ||
            item?.children?.some((child: Record<string, any>) => includesStr(child.title, debouncedSearch))
          ) {
            return (
              // @ts-ignore
              <TreeNode title={getTitle(item.title, debouncedSearch)} key={item.key} dataRef={item}>
                {item.children?.map((c: Record<string, any>) => (
                  // @ts-ignore
                  <TreeNode key={c.key} title={getTitle(c.title, debouncedSearch)} />
                ))}
              </TreeNode>
            );
          }
        }

        return includesStr(item.title, debouncedSearch) ? (
          // @ts-ignore
          <TreeNode title={getTitle(item.title, debouncedSearch)} key={item.key} />
        ) : null;
      });
    },
    [debouncedSearch],
  );

  const onExpand = (keys: string[]) => {
    setState({
      expandedKeys: keys,
    });
  };

  const treeNode = renderNode(treeData);

  useEffect(() => {
    if (debouncedSearch) {
      setState({
        expandedKeys: treeNode.map((item: Record<string, any>) => item?.key).filter((item: any) => item !== null),
      });
    }
  }, [debouncedSearch]);

  const onChange = (e: ChangeEvent<any>) => {
    const value = e.target.value?.trim();

    setState({
      search: value,
    });
  };

  return (
    <div>
      <div className="fs-multiple-select-opts-search">
        {showSearch && <Input placeholder={searchPlaceholder} onChange={onChange} ref={searchRef} allowClear />}
      </div>

      <div className="fs-multiple-select-opts-list" style={{ maxHeight: 300 }}>
        <Tree
          checkable={true}
          selectable={false}
          // defaultExpandAll={search ? true : false}
          checkedKeys={checkedList.map((item: any) => item.key)}
          onCheck={onCheck}
          expandedKeys={expandedKeys}
          onExpand={onExpand}
          // key={search}
          // filterTreeNode={() => {}}
        >
          {treeNode}
        </Tree>
      </div>
    </div>
  );
};

export default Index;
