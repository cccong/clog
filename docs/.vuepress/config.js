// const head = require('./config/head')
const plugin = require('./config/plugin');
const nav = require('./config/nav');
const sidebar = require('./config/sidebar');
const locales = require('./config/locales');

module.exports = {
  base:"/clog/",
  title: '这里是rsc的动感地带',
  description: '收录一些人生碎片',
  locales:locales,
  plugins: plugin,
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: nav,
    sidebar: sidebar,
    lastUpdated: '最后更新时间',
  },

};