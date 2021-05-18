import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  debugger
  app.use(ElementPlus, { locale: localeZH })
}
