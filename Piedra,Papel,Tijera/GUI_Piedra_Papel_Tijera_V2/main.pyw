from tkinter import *

#Creacion de la base
base = Tk()
base.title('ROCK, PAPER OR SCISSORS')
base.iconbitmap('images/juego.ico')
base.geometry('900x500')

#Creacion del Frame
myFrame = Frame()
myFrame.pack(fill='both',expand='True')
myFrame.config(bg='orange')
base.mainloop()