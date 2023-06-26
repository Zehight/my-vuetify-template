import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'
import * as path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

function getBase(mode: string) {
  if (mode === 'dev') {
    return '/'
  }
  if (mode === 'vercel') {
    return '/'
  }
  return '/'
}

// https://vitejs.dev/config/

export default ({ mode }) =>
  defineConfig({
    server: {
      // port: 3000,
      hmr: true,
      // proxy: {
      //   '/api': {
      //     target: 'http://192.168.103.125:8090', // 个人电脑
      //     changeOrigin: true,
      //     rewrite: (address) => address.replace(/^\/api/, ''),
      //   },
      // },
    },
    envDir: path.resolve(__dirname, 'env'),
    base: getBase(mode), // 二级目录
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathSrc,
        },
      ],
    },
    plugins: [
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          'vue',
          'vue-router',
          {
            '@vueuse/core': ['useMouse', ['useFetch', 'useMyFetch']],
            axios: [['default', 'axios']],
          },
        ],
        resolvers: [
          Vuetify3Resolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        dirs: ['src/components', 'src/assets', 'src/modules'],
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          Vuetify3Resolver(),
        ],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  })
