const { app, BrowserWindow, shell, ipcMain, session } = require('electron');
const path = require('path');

let mainWindow;

// Chrome-like user-agent so Google OAuth doesn't block login in the app's popup
const CHROME_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
      userAgent: CHROME_USER_AGENT,
    },
    title: 'Storage Portal Desktop',
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

ipcMain.handle('open-external', (_, url) => {
  shell.openExternal(url);
});

// Apply Chrome user-agent to all windows (including popups from webview) so Google OAuth works in-app
app.whenReady().then(() => {
  session.defaultSession.setUserAgent(CHROME_USER_AGENT);
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
