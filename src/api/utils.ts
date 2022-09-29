import MIMEType from "whatwg-mimetype";

export const getMIMEType = (typ: string): [type: string, mime: MIMEType] => {
  return [typ, new MIMEType(typ)];
};
