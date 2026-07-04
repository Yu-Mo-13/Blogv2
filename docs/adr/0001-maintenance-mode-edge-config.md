# ADR 0001: Edge Config によるメンテナンス表示

## Status

Accepted

## Context

Vercel Edge Config に `{ "isInMaintenanceMode": true }` が設定されている間、通常コンテンツではなくメンテナンス中である旨の画面を表示したい。

## Decision

`src/middleware.ts` で `@vercel/edge-config` の `get("isInMaintenanceMode")` を読み、値が `true` の場合は `/maintenance` に rewrite する。静的アセット、Next.js 内部アセット、API、`/maintenance` 自身は対象外にする。

Edge Config の読み取りに失敗した場合は通常表示にフォールバックする。設定や一時的な読み取り失敗によって意図せずサイト全体が停止するリスクを避けるため。

## Consequences

- Edge Config の値を `true` にすると全通常ページでメンテナンス画面が表示される。
- 値を `false` にする、またはキーを削除すると通常表示に戻る。
- `/maintenance` は直接アクセス可能だが、検索エンジン向けに `noindex` を設定する。
