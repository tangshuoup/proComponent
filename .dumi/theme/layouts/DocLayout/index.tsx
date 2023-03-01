/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-16 10:01:43
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-20 09:51:43
 */
import animateScrollTo from "animated-scroll-to";
import { useLocation, useOutlet, useSiteData } from "dumi";
import Content from "../../slots/Content";
import Sidebar from "../../slots/Sidebar";
import Toc from "../../slots/Toc";
import React, { useEffect, useState, type FC } from "react";
import "./index.less";

const DocLayout: FC = () => {
  const outlet = useOutlet();
  const { hash } = useLocation();
  const { loading } = useSiteData();
  const [showSidebar, setShowSidebar] = useState(false);

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace("#", "");
    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300,
          });
        }
      }, 1);
    }
  }, [loading, hash]);

  return (
    <div
      className="dumi-firesoon-doc-layout"
      data-mobile-sidebar-active={showSidebar || undefined}
      onClick={() => setShowSidebar(false)}
    >
      <Sidebar />
      <Content>{outlet}</Content>
      <Toc />
    </div>
  );
};

export default DocLayout;
