import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Button", defineAsyncComponent(() => import("C:/Users/MT/Desktop/MyFile/Project/blogs_file/docs/.vuepress/components/Button.vue"))),
      app.component("Layout", defineAsyncComponent(() => import("C:/Users/MT/Desktop/MyFile/Project/blogs_file/docs/.vuepress/components/Layout.vue")))
  },
}
