export const isWx = (): boolean => {
  return window.__wxjs_environment === "miniprogram";
};
