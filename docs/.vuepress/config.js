const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')

import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
 
module.exports = {
    title: '一条丶小咸鱼',
    description: '一条丶小咸鱼 Component library with Vue3',
    base: '/',
    plugins: [
        registerComponentsPlugin({
          componentsDir: path.resolve(__dirname, './components'),
        })
    ],
    markdown: {
        code: {
            lineNumbers: false // 代码块显示行号
        }
    },
    theme: defaultTheme({
        dest: './dist',
        notFound:["你搞错了吧"],
        backToHome:"去主页看看吧",
        logo:'/images/author.jpg',
        repo:'https://gitee.com/z244/doc_manage',
        repoLabel:'源代码仓库',
        home:'/',
        editLink:false,
        navbar,
        sidebar,
    })
}