const {app, BrowserWindow, ipcMain} = require('electron');

import Opcserver from "./opcserver";

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1480,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/../app/index.html`);

    win.setFullScreen(false);

    const opcServer = new Opcserver(win, 8000);

}

app.whenReady().then(createWindow);

