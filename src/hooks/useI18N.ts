import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { localeObjects, setLocale } from "@/common/utils/locale";

export function useI18N(prefix?: string) {
  const i18nHook = useI18n();

  const localeObject = computed(() => localeObjects[i18nHook.locale.value]);

  function tWithPrefix(path: string, ...args: any) {
    return i18nHook.t(`${prefix ? `${prefix}.` : ""}${path}`, ...args);
  }

  function tmWithPrefix<T = []>(path: string, ...args: any): T {
    return <T>i18nHook.tm(`${prefix ? `${prefix}.` : ""}${path}`, ...args);
  }

  function localePath(path: string) {
    return path;
  }

  function localeRoute(route: object | string) {
    return route;
  }

  return {
    ...i18nHook,
    t: tWithPrefix,
    tm: tmWithPrefix,
    localeObject,
    localeObjects,
    setLocale,
    localePath,
    localeRoute,
  };
};
