export const removeCDATA = (str: string) => {
  return str.replace("<![CDATA[", "").replace("]]>", "");
};
