import { apiInfo, endPoints } from "@/constants/const";

// ブログ記事を取得する
const baseUrl = apiInfo.baseUrl;
const apiKey = apiInfo.apiKey;
const endpoint = endPoints.articles;

export const getAllArticles = async () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "",
  };
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: headers,
    // 記事数の増加を考慮し、再レンダリング時間を設定
    next: {
      revalidate: apiInfo.rerenderTime,
    }
  });
  const data = await res.json();
  return data.contents;
};

export const getArticleById = async (id: string) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "",
  };
  const res = await fetch(`${baseUrl}${endpoint}?id=${id}`, {
    method: "GET",
    headers: headers,
    // 表示する量が少ないため、キャッシュには保存しない
    cache: "no-cache",
  });
  const data = await res.json();
  return data.contents[0];
};
