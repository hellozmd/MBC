import HomePage from './pages/home.vue';
import TodoPage from './pages/todo.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
import detailPage from './pages/detailPage.vue';
import ContactsListComponent from 'framework7/components/contacts-list/contacts-list';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/todo/',
    component: TodoPage,
    on: {
    }
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/detail/:id',
    component: detailPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
