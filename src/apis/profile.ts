// その他パラメータ設定情報を取得する
const baseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY;
const endpoint = "profiles";

export const getAllProfiles = async () => {
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