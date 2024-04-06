// ブログ記事を取得する
const baseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY;
const endpoint = "articles";

export const getAllArticles = async () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "", // Ensure apiKey is not undefined
  };
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();
  return data;
};

export const getArticleById = async (id: string) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": apiKey || "", // Ensure apiKey is not undefined
  };
  const res = await fetch(`${baseUrl}${endpoint}/${id}`, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();
  return data;
};
