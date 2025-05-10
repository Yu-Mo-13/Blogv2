import { apiInfo } from "./const";

export const baseUrl = apiInfo.baseUrl;
export const apiKey = apiInfo.apiKey;

export const headers: HeadersInit = {
  "Content-Type": "application/json",
  "X-MICROCMS-API-KEY": apiKey || "",
};
