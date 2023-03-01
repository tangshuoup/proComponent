/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-16 14:41:09
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-16 15:48:57
 */
import type { FC } from "react";
import React, { useMemo } from "react";
import { Anchor } from "@firesoon/antd";
import { useRouteMeta } from "dumi";
import "./index.less";

const { Link } = Anchor;

type AnchorItem = {
  id: string;
  title: string;
  children?: AnchorItem[];
};
const Toc: FC = () => {
  const meta = useRouteMeta();
  const anchorItems = useMemo(
    () =>
      meta.toc.reduce<AnchorItem[]>((result, item) => {
        if (item.depth === 2) {
          result.push({ ...item });
        } else if (item.depth === 3) {
          const parent = result[result.length - 1];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push({ ...item });
          }
        }
        return result;
      }, []),
    [meta.toc],
  );

  return (
    <Anchor className="dumi-firesoon-toc">
      {anchorItems?.map((item) => {
        return (
          <Link key={item.id} title={item.title} href={`#${item.id}`}>
            {item?.children?.map((child) => {
              return <Link key={child.id} title={child.title} href={`#${child.id}`} />;
            })}
          </Link>
        );
      })}
    </Anchor>
  );
};

export default Toc;
