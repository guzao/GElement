import '@guzao-ui/theme/index.css'
import components from './components'
import { makeWithInstaller } from '@guzao-ui/utils'

const insatller = makeWithInstaller(components)

export default insatller

export * from '@guzao-ui/components'