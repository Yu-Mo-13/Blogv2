import { apiInfo, endPoints } from "@/constants/const";

// SNS情報を取得する
const baseUrl = apiInfo.baseUrl;
const apiKey = apiInfo.apiKey;
const endpoint = endPoints.snslinks;

export const getAllSns = async () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "", // Ensure apiKey is not undefined
  };
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: headers,
    cache: "no-cache",
  });
  const data = await res.json();
  return data.contents;
};