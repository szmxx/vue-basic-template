### 开发指南

#### 插件

必须安装的插件列表

- Eslint
- Prettier
- Stylelint
- Vuter
- EditorConfig for VS Code
- koroFileHeader
  函数快捷键：
  win: ctrl+win+t
  mac: ctrl+cmd+t
- Tailwind CSS IntelliSense
- element-ui-helper

#### 代码规范

命名规范、书写顺序规范等

##### 命名分类

- `camelCase`（驼峰式 ）
- `kebab-case`（短横线连接式）
- `PascalCase`（帕斯卡命名式）
- `snake_case`（下划线连接式）
- `XX_YY_ZZ`（常量命名规范）

##### 文件命名

- 工程命名
  `kebab-case`规范
- 目录命名
  1、components
  `PascalCase`，并采用特殊前缀标识全局组件，比如 `GlobalSvgIcon`
  2、views
  `PascalCase`，尽量目录名称和路由名称一一对应，这里提一下路由命名规范：
  path 采用`kebab-case`规范，name 采用 `PascalCase`规范，一级路由 path 需以 `/`开头

- 文件命名
  1、JavaScript 文件
  类文件采用 `PascalCase`，其他采用 `camelCase`
  2、CSS\SCSS 文件
  `kebab-case`规范
  3、Vue 文件
  路由组件采用 `kebab-case`规范，其他采用 `PascalCase`规范，组件最好使用 `index.js`进行暴露
  4、其他资源文件
  `kebab-case`规范

##### HTML

- 使用语义化标签，例如每一节采用`<section>`，标题采用 `<h1>`等

##### JavaScript

- 函数采用单一原则，需添加注释(ctrl+win+t)
- 重构和优化部分需添加 `TODO` 注释
- 必须采用 `ES6` 语法。var -> let; promise -> async...await
- if...else 采用 switch...case 替代
- 无用代码需要去除或者单独存于另一文件
- 复杂数据处理采用社区成熟工具库，如 `lodash`，避免在项目内造轮子
- 全局公共函数放置 `utils`目录，函数命名以 `snake_case` 规范，类命令以 `PascalCase`

##### CSS

- 采用 `scoped` 语法，避免在组件内书写全局样式
- 全局样式覆盖在 style/components/`component.scss` 对应组件内进行覆盖
- 系统全局样式在 style/global.scss 中书写
- 组件内采用`scoped + ::v-deep (dart-sass 用 >>> )`深度选择器方案，覆盖组件库默认样式
- 默认采用 `tailwind` 原子化
- 聚合通用样式类采用 `@layer` 和 `@apply` 方式
- 类命名采用 `kebab-case`，组件内取组件名作为根类名
- `px` 作为单位，采用 `postcss-px-to-viewport` 插件转换
- `theme\theme.scss` 进行 UI 组件库主题定制，`tailwind.config.js`进行系统主题定制，`style\variables.scss` 进行额外主题定制

##### Vue

- 组件抽象原则: 业务原子化、可复用、松耦合、可测试
- 组件必须声明 `name` 字段，命名采用 `PascalCase`
- props、data、computed、watch、methods 采用 `camelCase`方式，保持语义化和多单词组合
- props 显示声明类型和默认值，使用时采用 `kebab-case`方式，保持原子化
- mixins 中私有属性采用 `$` 前缀
- methods 采用动宾短语。
  1、主动触发（用户 UI 事件）
  handleXxx
  2、接口请求
  getXX、postXX、putXX、delXX
  3、数据处理
  processXX
- 组件间事件（emit），命名采用 `kebab-case`，尽量采用 `on-`前缀，标识组件事件
- created 发起 `ajax`请求、mounted 获取 `dom`节点
- 递归较多采用 `render`方式
- 命名顺序：`name -> mixins -> directives -> components -> props -> data -> computed -> watch -> lifecycle -> methods`
- 避免使用 `$parent` 和 `$children` 等非常规通信方式

#### 功能特性

- 提交规范
- 代码校验和格式化
- Axios 二次封装
- 组件、路由、Store 一键注册
- SVG 图标组件化
- 单元测试
- 可选链
- pnpm
- sass
- element-ui
- tailwind
- 构建优化

#### 注意事项

- 使用 dart-sass，不然 stylelint 会出现[问题](https://github.com/sass/libsass/issues/2722)
