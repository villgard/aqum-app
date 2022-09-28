import { fileURLToPath, URL } from 'node:url';
import { ConfigEnv, defineConfig, mergeConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vueTypeImports from 'vite-plugin-vue-type-imports';

export const finalizeViteConfig = async (
  { mode }: ConfigEnv = { mode: 'development',
command: 'serve' },
  config: Partial<UserConfig> = {},
): Promise<UserConfig> =>
  mergeConfig(config, {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/],
      }),
      vueTypeImports(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
    css: {
      modules: {
        genereteScopedNames: mode === 'development' ? undefined : '[hash:base64:5]',
      },
    },
    define: {
      // Define implicitly to hide warning in browser console
      // (https://vue-i18n.intlify.dev/guide/advanced/optimization.html#reduce-bundle-size-with-feature-build-flags)
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: true,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  });

export default defineConfig(finalizeViteConfig);
