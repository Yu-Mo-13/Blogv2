import { endPoints } from "@/constants/const";
import { apiClient } from "@/apis/common/common";

// 各サイトへのリンク情報を取得する
const endpoint = endPoints.snslinks;

export const getAllSns = async () => {
  return await apiClient.index(`${endpoint}?orders=createdAt`, {
    cache: "no-cache",
  });
};
