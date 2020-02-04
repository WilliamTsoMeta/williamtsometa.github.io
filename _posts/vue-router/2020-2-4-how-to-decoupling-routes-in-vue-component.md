---
tags:
  - vue-router
categories:
  - vue-router
---

Have you ever meet a scenario that you need receive params from url. Well then you can use this.\$route.params like this:

```js
// router
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }],
});
// your component
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
};
```

But how about you want to receive params from parent component?
What should you do?
add an judgement Like this?

```js
// your component
const User = {
  template:
    '<div v-if="$route.params.id">User {{ $route.params.id }}</div> <div v-if="!$route.params.id">User {{ $route.params.id }}</div>',
};
```

No you don't.

You had a better choice to use props:

```js
const User = {
  props: ['id'], //be aware here
  template: '<div>User {{ id }}</div>',
};
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      props: true, //set props option equal true
    },
    {
      path: '/user/:id',
      components: {
        default: User,
        sidebar: Sidebar,
      },
      props: {
        default: true, //use params as props in the default component
        sidebar: false, // params will not present as props in sidebar
      },
    },
  ],
});
```

Now you can use id whatever it come from.

## Updating...

您是否遇到过需要从 url 接收参数的情况。 您可以这样做 this.\$route.params 像这样：

```js
// router
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }],
});
// your component
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
};
```

但是您想从父组件接收参数怎么样？
你该怎么办？
加上这样的判断？

```js
// your component
const User = {
  template:
    '<div v-if="$route.params.id">User {{ $route.params.id }}</div> <div v-if="!$route.params.id">User {{ $route.params.id }}</div>',
};
```

您有更好的选择 **props**：

```js
const User = {
  props: ['id'], //be aware here
  template: '<div>User {{ id }}</div>',
};
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      props: true, //set props option equal true
    },
    {
      path: '/user/:id',
      components: {
        default: User,
        sidebar: Sidebar,
      },
      props: {
        default: true, //use params as props in the default component
        sidebar: false, // params will not present as props in sidebar
      },
    },
  ],
});
```

现在，无论参数来自何处，您都可以使用您的参数就像使用普通 props 一样。
