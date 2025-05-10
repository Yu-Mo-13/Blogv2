import { endPoints } from "@/constants/const";
import { baseUrl, headers } from "@/constants/api";

// その他パラメータ設定情報を取得する
const endpoint = endPoints.profiles;

export const getAllProfiles = async () => {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: headers,
    // 表示する量が少ないため、キャッシュには保存しない
    cache: "no-cache",
  });
  const data = await res.json();
  return data.contents;
};
