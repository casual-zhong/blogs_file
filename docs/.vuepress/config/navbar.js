module.exports = [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/componentDocs/guide/'
      },
      {
        text: '前端',
        children: [{
            text: 'CSS',
            link: '/componentDocs/css/'
          },
          {
            text: 'JavaScript',
            link: '/componentDocs/js/'
          }
        ]
      },
      {
        text: '博客指南',
        children: [{
            text: '掘金',
            link: 'https://juejin.cn/'
          },
          {
            text: '博客园',
            link: 'https://www.cnblogs.com/wangdashi/'
          }
        ]
      }
      // ,
      // {
      //   text: 'github',
      //   link: 'https://github.com/m-baseui/m-baseui'
      // }
    ]