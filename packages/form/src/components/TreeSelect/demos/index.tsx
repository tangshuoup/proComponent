import React, { useState } from "react";
import { Button } from "@firesoon/ant-ui";
import { TreeSelect } from "@firesoon/pro-components";
import _ from "lodash";
import { data } from "./utils";

export default () => {
  const [keys, setKeys] = useState(["1030703", "1030406", "1030702", "1030504", "1030511", "1030409"]);

  const onSelect = (data: any) => {
    console.warn("onSelect", data);
    setKeys([...data.map((item: Record<string, any>) => item.key)]);
  };

  const onReset = () => {
    setKeys(["1030506", "1030703", "1030505", "1030406", "1030702", "1030504", "1030602", "1030511", "1030409"]);
  };

  return (
    <div>
      <TreeSelect
        label="树选择"
        tree={data}
        // dropProps={{ width: 300 }}
        popupClassName="sss"
        onSelect={onSelect}
        checkKeys={_.cloneDeep(keys)}
        searchPlaceholder="请输入"
      />

      <Button onClick={onReset} style={{ marginTop: 16 }}>
        重置
      </Button>
    </div>
  );
};
