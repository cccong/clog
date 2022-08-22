const secret = require('./secret')

module.exports = {
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github',
    autoCreateIssue: true,
    // 其他的 Vssue 配置
    owner: 'cccong',
    repo: 'clog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
  },
  '@vuepress/back-to-top': true,
}