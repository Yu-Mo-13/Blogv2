import PySimpleGUI as sg
import classes.subprocess as subprocess
from common.const import getFontInfo, getTitle, getDialogTitle

# ウィジェットのプロパティを指定
font = getFontInfo()

layout = [
  [sg.Text(getTitle(3), font=font)],
  [sg.Button(getTitle(0), font=font, key='article')],
  [sg.Button(getTitle(1), font=font, key='profile')],
  [sg.Button(getTitle(2), font=font, key='snslink')],
  [sg.Button('終了', font=font, key='cancel')]
]

window = sg.Window(getDialogTitle(), layout)

while True:
  event, values = window.read()

  if event == None:
    break

  if event == 'article':
    subp = subprocess.Subprocess(['python3', 'article.py'])
    subp.run()
  
  elif event == 'profile':
    subp = subprocess.Subprocess(['python3', 'profile.py'])
    subp.run()
  
  elif event == 'snslink':
    subp = subprocess.Subprocess(['python3', 'snslink.py'])
    subp.run()
  
  elif event == 'cancel':
    break

window.close()