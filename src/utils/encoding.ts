import { decode, encode } from "js-base64";

export const base64EncodeUrl = (str: string): string => {
  return encode(str);
};

export const base64DecodeUrl = (str: string): string => {
  return decode(str);
};
