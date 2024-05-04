import { apiInfo, endPoints } from "@/constants/const";

// 各サイトへのリンク情報を取得する
const baseUrl = apiInfo.baseUrl;
const apiKey = apiInfo.apiKey;
const endpoint = endPoints.snslinks;

export const getAllSns = async () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "",
  };
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: headers,
    // 表示する量が少ないため、キャッシュには保存しない
    cache: "no-cache",
  });
  const data = await res.json();
  return data.contents;
};