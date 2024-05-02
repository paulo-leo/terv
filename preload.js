/*
  Este arquivo implementa as principais funcionalidades para o rápido início do desenvolvimento do seu aplicativo. Ao modificar este arquivo, tenha cuidado para não quebrar o código existente.
*/
const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('electronAPI', {
    close: () => {
        ipcRenderer.send('user-close-window');
    },
    toggle: () => {
        ipcRenderer.send('user-maximize-window');
    },
    hide: () => {
        ipcRenderer.send('user-hide-window');
    },
    event: (eventName) => {
        ipcRenderer.send(eventName);
    },
    process: () => process,
    route: async (controller, method, request = {}) => {
        try {
            const route = await ipcRenderer.invoke('route', {
                controller: controller,
                method: method,
                request: request
            });
            return route;
        } catch (error) {
            console.error('Erro ao importar módulos:', error);
            throw error;
        }
    }
    /*
     Adicione novos métodos aqui caso seja necessário. Não modifique os métodos acima. Crie novos a partir daqui.
    */
})