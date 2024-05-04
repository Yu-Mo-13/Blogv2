import { format } from "@formkit/tempo"
import { htmlToText } from "html-to-text";
import * as marked from "marked";
import React from "react";

// 日付の形式をYYYY-MM-DDThh:mm:sssZからYYYY/MM/DDに変換する
export function convertDate(date: string): string {
  const oldDate = new Date(date);
  return format(oldDate, "YYYY/MM/DD", "ja")
}

export function convertHtmlToReact(html: string): JSX.Element {
  return React.createElement("div", { dangerouslySetInnerHTML: { __html: html } });
}

// microCMSから取得したリッチテキストのHTML形式のレスポンスをPlainTextに変換する
// export function convertRichTextToPlainText(html: string): string {
//   const text = htmlToText(html, {
//     wordwrap: 130
//   });
//   return text;
// }

export async function convertMdToHtml(md: string): Promise<string> {
  return await marked.parse(md);
}