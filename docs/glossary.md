# Glossary

## Edge Config

Vercel が提供する低レイテンシの設定ストア。このプロジェクトでは `isInMaintenanceMode` を読み、メンテナンス表示の切り替えに使う。

## Maintenance mode

通常ページへのアクセス時に、サイト更新中であることを伝える `/maintenance` を表示する状態。Edge Config の `isInMaintenanceMode` が `true` の場合に有効になる。
