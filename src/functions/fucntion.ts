import { format } from "@formkit/tempo"
import { htmlToText } from "html-to-text";

// 日付の形式をYYYY-MM-DDThh:mm:sssZからYYYY/MM/DDに変換する
export function convertDate(date: string): string {
  const oldDate = new Date(date);
  return format(oldDate, "YYYY/MM/DD", "ja")
}

// microCMSから取得したリッチテキストのHTML形式のレスポンスをPlainTextに変換する
export function convertRichTextToPlainText(html: string): string {
  const text = htmlToText(html, {
    wordwrap: 130
  });
  return text;
}