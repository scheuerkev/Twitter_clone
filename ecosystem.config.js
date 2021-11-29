module.exports = {
    apps: [{
        name: 'twitter',
        script: './bin/www.js',
        watch: '.',
        instances: 'max',
        autorestart: true,
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }
    ],
};
