import { format } from "@formkit/tempo"

// 日付の形式をYYYY-MM-DDThh:mm:sssZからYYYY/MM/DDに変換する
export function convertDate(date: string): string {
  const oldDate = new Date(date);
  return format(oldDate, "YYYY/MM/DD", "ja")
}