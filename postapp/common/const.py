def getFontInfo(isPopup = False):
  # ポップアップの場合のみ引数指定して、フォントサイズを小さくする
  size = 16 if isPopup else 20
  return ('meiryo', size)

def getInputTextSize(width):
  # 高さは3で統一
  return (width, 3)

def getMultiLineSize(width):
  # 高さは30で統一(10行分)
  return (width, 30)

def getTitle(functionSeqNo):
  titles = ['ブログ記事作成', 'プロフィール編集', 'SNSアカウント']
  return titles[functionSeqNo]

def getDialogTitle():
  return 'ブログ バージョン2'