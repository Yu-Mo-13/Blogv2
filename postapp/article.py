# coding: utf-8
import PySimpleGUI as sg
from classes.curl import Curl
from classes.log import Log
from common.const import *
from common.config import *
from common.validate import *

# ウィジェットのプロパティを指定
font = getFontInfo()
font_popup = getFontInfo(True)
size = getInputTextSize(20)

# 画面レイアウト
layout = [
  [
    sg.Text(getTitle(0), font=font),
    sg.Button('投稿', font=font, key='post'),
    sg.Button('終了', font=font, key='cancel')
  ],
  [
    sg.Button('h1', font=font, key='h1'),
    sg.Button('h2', font=font, key='h2'),
    sg.Button('h3', font=font, key='h3'),
    sg.Button('ul', font=font, key='ul')
  ],
  [sg.Text('タイトル', font=font)],
  [sg.InputText(size=getInputTextSize(30), font=font, key='title')],
  [sg.Text('記事内容', font=font)],
  [sg.Multiline(size=getMultiLineSize(30), font=font, key='blogcontent')]
]

window = sg.Window(getDialogTitle(), layout)

while True:
  event, values = window.read()
  if event == None:
    break
  
  if event == 'post':
    # 入力チェック
    if not checkMultiContents(values['title'], values['blogcontent']):
      sg.popup('タイトルと記事内容を入力してください。', font=font_popup)
      continue

    if sg.PopupYesNo('記事を投稿しますか？', font=font_popup) == 'Yes':
      log = Log()

      try:
        curl = Curl(f'{getConfig("APIINFO", "ENDPOINT")}{getConfig("APIINFO", "ARTICLEPOINT")}')

        # 投稿データを作成して投稿
        data = {
          "title": values['title'],
          "contents": values['blogcontent']
        }
        res = curl.post(data)

        log.write('info', f'記事の投稿に成功しました。\n{res}')
        sg.popup('記事を投稿しました。', font=font_popup)

      except Exception as e:
        log.write('error', f'記事の投稿に失敗しました。\n{e}')
        sg.popup(f'記事の投稿に失敗しました。\n{e}', font=font_popup)

  if event.startswith('h') or event == 'ul':
    # ボタンのイベントを取得
    button = event
    text = ''

    if button == 'h1':
      text = '# '
    if button == 'h2':
      text = '## '
    if button == 'h3':
      text = '### '
    if button == 'ul':
      text = '- '

    # カーソル位置にテキストを挿入
    window['blogcontent'].update(f'{values["blogcontent"]}\n{text}')
  
  if event == 'cancel':
    if sg.PopupYesNo(f'{getTitle(0)}を終了しますか？', title=getDialogTitle() ,font=font_popup) == 'Yes':
      break

window.close()
