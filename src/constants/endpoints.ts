export const HOST = 'http://localhost:13332'

export const ENDPOINTS = {
    WORDPRESS: {
        PLUGINS: HOST + '/wp/php/plugin/list',
        THEMES: HOST + '/wp/php/theme/list',
        VERSION: HOST + '/wp/php/core/version',
        FILE_SIZE: HOST + '/wp/php/file/size'
    },
    USER: {
        LOGIN: HOST + '/user/login'
    },
    WEBSITE: {
        SET_ACTIVE: HOST + '/website/active/set'
    }
}
