const {app, BrowserWindow} = require("electron");
const path = require('path');
const url = require('url');
const appRoot = require('app-root-path');

let window;

function createWindow() {
    window = new BrowserWindow();

    window.loadURL(url.format({
        pathname: path.join(appRoot.path, 'html', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    window.on('closed', () => {
        window = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if(window === null)
        createWindow();
});