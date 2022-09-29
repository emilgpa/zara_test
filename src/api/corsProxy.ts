import { getMIMEType } from "./utils";

export const corsProxy = async (url: string) => {
  const resp = await fetch(`https://api.allorigins.win/get?url=${url}`);
  const raw = await resp.json();
  const [, mime] = getMIMEType(raw.status.content_type);

  if (mime.isJavaScript()) {
    return JSON.parse(raw.contents);
  }
  if (mime.isXML()) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(raw.contents, "text/xml");
    return xmlDoc;
  }
  // not found valid content-type so return it as raw
  return raw.contents;
};
