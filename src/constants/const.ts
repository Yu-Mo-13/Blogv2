const rootUrl: string = process.env.ROOT_URL || '';
const apiInfo = {
  baseUrl: process.env.API_BASE_URL,
  apiKey: process.env.API_KEY,
  rerenderTime: 3600,
}
const endPoints = {
  articles: "articles",
  profiles: "profiles",
  snslinks: "snslinks",
}
const topMenu: string[] = ["Blog", "Profile", "Link"];
const topMenuLinks: string[] = ["/articles", "/profiles", "/snslinks"];

export { topMenu, topMenuLinks, apiInfo, endPoints, rootUrl };