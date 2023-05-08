const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({ width: 800, height: 600 })

  win.loadFile(path.join(__dirname,'../build/index.html'));

  // Abre las herramientas de desarrollo de Chrome.
  // win.webContents.openDevTools()

  // Cierra la aplicación cuando se cierra la ventana.
  win.on('closed', () => {
    win = null
  })
}

app.whenReady().then(() => {
    createWindow()
  })
// Sal de la aplicación cuando todas las ventanas están cerradas.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // En macOS, es común re-crear una ventana en la aplicación cuando
  // el icono del dock es clicado y no hay otras ventanas abiertas.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})