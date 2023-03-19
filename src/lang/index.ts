import { createI18n } from "vue-i18n";
import { LANG_VALUE } from "@/common/enum";
import { GLOBAL_KEY } from "@/common/enum";
import zhCN from "./zh-CN";
import en from "./en";

const i18n=createI18n({
    legacy:false,
    locale:getLanguage(),
    messages:{
        [LANG_VALUE.Zh]:zhCN,
        [LANG_VALUE.En]:en
    }
})
export default i18n

import cache from "@/utils/cache";
export function getLanguage() {
    const chooseLanguage = cache.getCache(GLOBAL_KEY.Language)
    if (chooseLanguage) return chooseLanguage
  
    // 如果没有选择语言
    const language = navigator.language.toLowerCase()
    const locales = [LANG_VALUE.En, LANG_VALUE.Zh]
    for (const locale of locales) {
      if (language.indexOf(locale) > -1) {
        return locale
      }
    }
    return LANG_VALUE.Zh
  }
export function changeI18nLanguage(lang:string){
  i18n.global.locale.value=lang;
  cache.setCache(GLOBAL_KEY.Language,lang);
}