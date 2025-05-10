import { FunctionEnum } from "@/enum/function";

const rootUrl: string = process.env.ROOT_URL || "";
const apiInfo = {
  baseUrl: process.env.API_BASE_URL,
  apiKey: process.env.API_KEY,
  rerenderTime: 3600,
};
const endPoints = {
  articles: `${apiInfo.baseUrl}${FunctionEnum.ARTICLES}`,
  profiles: `${apiInfo.baseUrl}${FunctionEnum.PROFILES}`,
  snslinks: `${apiInfo.baseUrl}${FunctionEnum.SNSLINKS}`,
};
const topMenu: string[] = ["Blog", "Profile", "Link"];
const topMenuLinks: string[] = ["/articles", "/profiles", "/snslinks"];

export { topMenu, topMenuLinks, apiInfo, endPoints, rootUrl };
