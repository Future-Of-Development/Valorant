var ENV = {}

if (window.location.hostname === 'http://localhost:5173/') {
    ENV = {
        APP_NAME: 'Valorant',
        APP_ENV: 'dev',
        BASE_URL: 'https://valorant-api.com/v1',
    }
}

export { ENV }