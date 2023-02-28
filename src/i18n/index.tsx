import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18nResources } from './translations'

i18n.use(initReactI18next).init({
  resources: i18nResources,
  lng: 'ja', // default
})

export default i18n
