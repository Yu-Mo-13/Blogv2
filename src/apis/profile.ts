import { endPoints } from "@/constants/const";
import { apiClient } from "@/apis/common/common";

// その他パラメータ設定情報を取得する
const endpoint = endPoints.profiles;

export const getAllProfiles = async () => {
  return await apiClient.index(endpoint, {
    cache: "no-cache",
  });
};
