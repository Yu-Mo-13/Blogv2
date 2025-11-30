import { apiInfo, endPoints } from "@/constants/const";
import { apiClient } from "@/apis/common/common";

// ブログ記事を取得する
const endpoint = endPoints.articles;

export const getAllArticles = async () => {
  return await apiClient.index(endpoint, {
    cache: "no-cache",
  });
};

// 最近のブログ記事を取得する(最大3件)
export const getRecentArticles = async () => {
  return await apiClient.index(`${endpoint}?limit=3`, {
    cache: "no-cache",
  });
};

export const getArticleById = async (id: string) => {
  return await apiClient.show(`${endpoint}?ids=${id[0].replace("id%3D", "")}`, {
    cache: "no-cache",
  });
};
