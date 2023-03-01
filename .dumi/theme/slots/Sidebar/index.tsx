/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-16 10:53:42
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-17 16:54:05
 */
import { NavLink, useLocation, useSidebarData } from "dumi";
import { Menu } from "@firesoon/antd";
import React, { type FC, useMemo } from "react";
import { version } from "@firesoon/pro-components";
import "./index.less";

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const sidebar = useSidebarData();
  const defaultOpenKeys = useMemo(() => {
    return sidebar?.find((item) => item?.children?.find((child) => child.link === pathname))?.title ?? "";
  }, [pathname]);

  if (!sidebar) return null;

  return (
    <div className="dumi-firesoon-sidebar">
      <div className="dumi-firesoon-sidebar-tips">
        <h3>业务组件库</h3>
        <p>当前版本{version["@firesoon/pro-components"]}</p>
      </div>
      <Menu mode="inline" defaultSelectedKeys={[pathname]} defaultOpenKeys={[defaultOpenKeys]}>
        {sidebar.map((item) => {
          const hasChildren = item.children && Boolean(item.children.length);
          if (hasChildren) {
            return (
              <Menu.SubMenu title={item.title} key={item.title}>
                {item.children?.map((child) => {
                  return (
                    <Menu.Item key={child.link} title={child.title}>
                      <NavLink to={child.link} title={child.title} end>
                        {child.title}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </Menu.SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.link} title={item.title} className="firesoon-menu-item">
                <NavLink to={item.link} title={item.title} end>
                  {item.title}
                </NavLink>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </div>
  );
};

export default Sidebar;
