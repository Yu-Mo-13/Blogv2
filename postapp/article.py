# coding: utf-8
import PySimpleGUI as sg
from common.const import *

# ウィジェットのプロパティを指定
font = getFontInfo()
font_popup = getFontInfo(True)
size = getInputTextSize(20)

# 画面レイアウト
layout = [
  [sg.Text(getTitle(0), size=size, font=font),
   sg.Button('投稿', font=font, key='post'),
   sg.Button('終了', font=font, key='cancel')
  ],
  [sg.Text('記事内容', font=font)],
  [sg.Multiline(size=getMultiLineSize(30))]
]

window = sg.Window(getDialogTitle(), layout)

while True:
  event, values = window.read()
  if event == None:
    break
  if event == 'post':
    sg.popup('記事を投稿しました', font=font_popup)
  if event == 'cancel':
    sg.popup(f'{getTitle(0)}を終了します', font=font_popup)
    break