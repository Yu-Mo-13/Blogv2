import { apiInfo, endPoints } from "@/constants/const";

// その他パラメータ設定情報を取得する
const baseUrl = apiInfo.baseUrl;
const apiKey = apiInfo.apiKey;
const endpoint = endPoints.profiles;

export const getAllProfiles = async () => {
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
}

export const getProfilesById = async (id: string) => {
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