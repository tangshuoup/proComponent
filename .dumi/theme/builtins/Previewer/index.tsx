/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-17 10:03:13
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-20 10:04:45
 */
import classnames from "classnames";
import { IPreviewerProps, useLocation } from "dumi";
import PreviewerActions from "../../slots/PreviewerActions";
import React, { type FC } from "react";
import "./index.less";

const Previewer: FC<IPreviewerProps> = (props) => {
  const { hash } = useLocation();
  const link = `#${props.asset.id}`;

  return (
    <div
      id={props.asset.id}
      className={classnames("dumi-firesoon-previewer", props.className)}
      style={props.style}
      data-debug={props.debug}
      data-active={hash === link || undefined}
    >
      <div
        className="dumi-firesoon-previewer-demo"
        style={{ background: props.background }}
        data-compact={props.compact || undefined}
        data-transform={props.transform || undefined}
        data-iframe={props.iframe || undefined}
      >
        {props.iframe ? (
          <iframe
            style={["string", "number"].includes(typeof props.iframe) ? { height: Number(props.iframe) } : {}}
            src={props.demoUrl}
          ></iframe>
        ) : (
          props.children
        )}
      </div>
      {!props.guide && (
        <div className="dumi-firesoon-previewer-meta">
          <PreviewerActions {...props} link />
        </div>
      )}
    </div>
  );
};

export default Previewer;
