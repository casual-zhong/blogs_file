export const themeData = JSON.parse("{\"dest\":\"./dist\",\"notFound\":[\"你搞错了吧\"],\"backToHome\":\"去主页看看吧\",\"logo\":\"/images/author.jpg\",\"repo\":\"https://gitee.com/z244/doc_manage\",\"repoLabel\":\"源代码仓库\",\"home\":\"/\",\"editLink\":false,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/componentDocs/guide/\"},{\"text\":\"前端\",\"children\":[{\"text\":\"CSS\",\"link\":\"/componentDocs/css/\"},{\"text\":\"JavaScript\",\"link\":\"/componentDocs/js/\"}]},{\"text\":\"博客指南\",\"children\":[{\"text\":\"掘金\",\"link\":\"https://juejin.cn/\"},{\"text\":\"博客园\",\"link\":\"https://www.cnblogs.com/wangdashi/\"}]}],\"sidebar\":{\"/componentDocs/css/\":[{\"title\":\"VuePress配置\",\"children\":[{\"text\":\"python1\",\"link\":\"/componentDocs/css/index.md\"},{\"text\":\"博客园\",\"link\":\"/componentDocs/css/index1.md\"}]}],\"/componentDocs/js/\":[{\"title\":\"VuePress配置\",\"children\":[{\"text\":\"python1\",\"link\":\"/componentDocs/js/index.md\"},{\"text\":\"博客园\",\"link\":\"/componentDocs/js/index1.md\"}]}],\"/componentDocs/guide/\":[{\"text\":\"快速上手\",\"children\":[{\"text\":\"安装使用\",\"link\":\"/componentDocs/guide/index.md\"}]},{\"text\":\"常规\",\"children\":[{\"text\":\"Layout 布局\",\"link\":\"/componentDocs/guide/Layout.md\"}]},{\"text\":\"通用\",\"children\":[{\"text\":\"Button 组件\",\"link\":\"/componentDocs/guide/Button.md\"},{\"text\":\"Input 组件\",\"link\":\"/componentDocs/guide/Input.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
