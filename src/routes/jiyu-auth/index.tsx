import { isWx } from "@/util/wechat";
import React, { useEffect } from "react";
import wx from "weixin-js-sdk";

export const JiYuAuth = (): JSX.Element => {
  useEffect(() => {
    if (isWx()) {
      const url = window.location.href;
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      const code = params.get("code");
      const scope = params.get("scope");
      const state = params.get("state");
      const clientId = params.get("client_id");
      // 一定要销毁 webview 才能收到消息
      // 需要特别注意，得先返回再去postMessage（逆天啊逆天）
      wx.miniProgram.navigateBack({ url: "/pages/auth/index" }); // 官方文档不规范的典范 ts 里 params 写着 url 文档里写的 delta
      // 我问问你腾讯你做这个小程序有没有用心在写 这b玩意儿谁开发谁傻逼
      wx.miniProgram.postMessage({ data: { code, scope, state, clientId } });
    }
  }, []);

  return <></>;
};
