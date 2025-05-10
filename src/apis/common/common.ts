import { headers } from "@/constants/api";

const defaultOptions = {
  method: "GET",
  headers: headers,
};

export const apiClient = {
  async index(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...defaultOptions,
      ...options,
    });
    const data = await res.json();
    return data.contents;
  },

  async show(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...defaultOptions,
      ...options,
    });
    const data = await res.json();
    return data.contents[0];
  },
};
