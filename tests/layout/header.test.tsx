/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-07 17:14:19
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-14 14:57:58
 */
import React from "react";
import { Header } from "@firesoon/pro-components";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("Header", async () => {
    const wrapper = render(
      <Header
        logo="test"
        user={{
          name: "王晓明",
        }}
        isSys={true}
        hideRoles={false}
      />,
    );
    expect(!!wrapper.baseElement.querySelector<HTMLDivElement>(".fs-header")).toBeTruthy();
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
