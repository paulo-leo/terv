/*
  Este arquivo implementa as principais funcionalidades para o rápido início do desenvolvimento do seu aplicativo. Ao modificar este arquivo, tenha cuidado para não quebrar o código existente.
*/

import 'dotenv/config';
import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'path';

const env = process.env;
const __dirname = fileURLToPath(import.meta.url);
const rootDir = app.getAppPath();
const controllerPath = join(rootDir, env.CONTROLLER_PATH);
const iconPath = join(rootDir, 'icon.ico');


app.setPath('userData', path.join(app.getPath('appData'), 'MyAppCache'));

const createWindow = () => {

    const mainWindow = new BrowserWindow({
        action: 'allow',
        width: env.WINDOW_WIDTH ?? 400,
        height: env.WINDOW_HEIGHT ?? 300,
        frame: (env.WINDOW_FRAME == 'true'),
        icon: iconPath,
        autoHideMenuBar: (env.WINDOW_HIDE_MENU_BAR == 'true'),
        cache: (env.WINDOW_CACHE == 'true'),
        webPreferences: {
            preload: join(__dirname, '../preload.js'),
        },
    });

    /*
      Não modifique o apague o seguinte método
    */
    async function executeMethod(className, methodName, request) {
        try {
            const controllerFilePath = path.join(controllerPath, `${className}.js`);
            const fileURL = new URL(`file://${controllerFilePath}`);
            const { default: MyClass } = await import(fileURL.href);
            const myInstance = new MyClass();
            if (typeof myInstance[methodName] === 'function') {
                const result = myInstance[methodName](request);
                return result;
            } else {
                throw new Error(`Método '${methodName}' não encontrado na classe '${className}'`);
            }
        } catch (error) {
            throw error;
        }
    }
    /*
     Não modifique o apague o seguinte evento
    */
    ipcMain.handle('route', async (event, args) => {
        let className = args.controller;
        let methodName = args.method;
        let request = args.request ?? {};
        request['$electron'] = {
            app: app,
            ipcMain: ipcMain,
            BrowserWindow: BrowserWindow
        };

        return executeMethod(className, methodName, request);
    });

    ipcMain.on('user-close-window', () => {
        BrowserWindow.getFocusedWindow().close();
    });

    // Lidere com a mensagem para maximizar a janela
    ipcMain.on('user-maximize-window', () => {
        const w = BrowserWindow.getFocusedWindow();
        if (w.isMaximized()) {
            w.restore();
        } else {
            w.maximize();
        }
    });

    ipcMain.on('user-hide-window', () => {
        mainWindow.minimize();
    });


    if (env.ENVIRONMENT == 'dev') {
        mainWindow.loadURL(env.ENVIRONMENT_DEV_URL);
    }

    if (env.ENVIRONMENT == 'prod') {
        mainWindow.loadURL(env.ENVIRONMENT_PROD_URL);
    }

    if (env.ENVIRONMENT == 'prod' && env.ENVIRONMENT_PROD_URL == 'build') {
        const buildPath = path.join(__dirname, 'build');
        mainWindow.loadURL(`file://${buildPath}/index.html`);
    }

    if (env.OPEN_DEV_TOOLS == 'true') mainWindow.webContents.openDevTools()
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
