const rootUrl: string = process.env.ROOT_URL || '';
const apiInfo = {
  baseUrl: process.env.API_BASE_URL,
  apiKey: process.env.API_KEY,
}
const endPoints = {
  articles: "articles",
  profiles: "profiles",
  snslinks: "snslinks",
}
const topMenu: string[] = ["Blog", "Profile", "Link to SNS"];
const topMenuLinks: string[] = ["/articles", "/profiles", "/snslinks"];

export { topMenu, topMenuLinks, apiInfo, endPoints, rootUrl };