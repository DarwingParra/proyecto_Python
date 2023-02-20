from fastapi import FastAPI
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/Puchamon", StaticFiles( directory = "./juego/Puchamon" ), name = "puchamon" )

@app.get('/',response_class=HTMLResponse)
def root():
    html_address = './juego/Puchamon/puchamon.html'
    return FileResponse(html_address, status_code=200)
    

