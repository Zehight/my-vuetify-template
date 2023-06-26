module.exports = {
  env:{
    browser:true,
    es2021:true,
    node:true,
  },
  extends:[
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:{
    ecmaVersion:'latest',
    parser:'@typescript-eslint/parser',
    sourceType:'module',
  },
  parser:'vue-eslint-parser',
  plugins:['vue', '@typescript-eslint'],
  rules:{
    indent:['error', 2],
    quotes:['error', 'single'],
    semi:['error', 'never'],
    'no-undef':'off', // 未定义的变量关闭报错
    '@typescript-eslint/no-non-null-assertion':0,
    '@typescript-eslint/no-explicit-any':['off'], // 关闭 any 类型的 warning
  },
  // 全局变量
  globals:{
    defineEmits:'readonly',
    defineProps:'readonly',
    defineExpose:'readonly',
    withDefaults:'readonly',
    WeixinJSBridge:'readonly',
    ElMessage:'readonly',
    ElMessageBox:'readonly',
    ElLoading:'readonly',
  },
}
