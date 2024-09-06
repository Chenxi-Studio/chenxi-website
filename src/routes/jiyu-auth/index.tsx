import { isWx } from "@/util/wechat";
import React, { useEffect } from "react";
import wx from "weixin-js-sdk";

export const JiYuAuth = (): JSX.Element => {
  useEffect(() => {
    if (isWx()) {
      wx.miniProgram.postMessage({ data: "foo" });
      // 一定要销毁 webview 才能收到消息
      wx.miniProgram.switchTab({ url: "/pages/home/index" });
    }
  }, []);

  return <></>;
};
