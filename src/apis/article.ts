import { apiInfo, endPoints } from "@/constants/const";

// ブログ記事を取得する
const baseUrl = apiInfo.baseUrl;
const apiKey = apiInfo.apiKey;
const endpoint = endPoints.articles;

export const getAllArticles = async () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "", // Ensure apiKey is not undefined
  };
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: headers,
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
    "X-MICROCMS-API-KEY": apiKey || "", // Ensure apiKey is not undefined
  };
  const res = await fetch(`${baseUrl}${endpoint}?id=${id}`, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();
  return data.contents[0];
};
