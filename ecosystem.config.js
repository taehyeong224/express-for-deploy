
module.exports = {
    deploy: {
        dev: {
            host: ["localhost"],
            user: 'ubuntu',
            ssh_options: 'StrictHostKeyChecking=no',
            path: '/home/ubuntu/test',
            ref: 'origin/master',
            repo: 'https://github.com/taehyoung/express-for-deploy.git',
            'pre-setup': "whoami; pwd; echo 'This is a remote pre-setup executed command'",
            'pre-deploy-local': "echo 'This is a remote pre-setup executed command'",
            'post-setup': "echo 'setup complete'",
            'post-deploy': 'npm install; pm2 startOrRestart server.config-dev.json'
        }
    }
}
