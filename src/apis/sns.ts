import { endPoints } from "@/constants/const";
import { baseUrl, headers } from "@/constants/api";

// 各サイトへのリンク情報を取得する
const endpoint = endPoints.snslinks;

export const getAllSns = async () => {
  const res = await fetch(`${baseUrl}${endpoint}?orders=createdAt`, {
    method: "GET",
    headers: headers,
    // 表示する量が少ないため、キャッシュには保存しない
    cache: "no-cache",
  });
  const data = await res.json();
  return data.contents;
};
