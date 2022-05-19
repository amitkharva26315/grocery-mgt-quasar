// import something here

// "async" is optional;
// setup fake backend
import { configureFakeBackend } from '../_helpers';
import VeeValidate from "vee-validate/dist/vee-validate";
configureFakeBackend();
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ router, store, Vue }) => {
  Vue.use(VeeValidate, {
    validity: true
  });

  router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
      return next('/login');
    }

    next();
  })
}
