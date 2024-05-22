import type { Plugin, App } from 'vue'
import { each } from 'lodash-es'

type SFCWithInsatll<T> = T & Plugin

/**
 * 全量注册插件
*/
export function makeWithInstaller (compoents: Plugin []) {

  const installer = (app: App) => each(compoents, (com) => app.use(com))
  return installer as Plugin

}

/**
 *按需引入组件
*/
export const withInstall = <T>(compoent: T) => {

  (compoent as SFCWithInsatll<T>).install = (app: App) => {
    const name = (compoent as any).name
    app.component(name, compoent as Plugin)
  }
  return compoent as SFCWithInsatll<T>

}