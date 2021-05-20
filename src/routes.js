import Links from './pages/link';
import StyleGuide from './pages/styleguide';
import Home from './pages/home';
import Search from './pages/search';
import Menu from './pages/menu';
import IndividualProduct from './pages/individual-product';
import Test from './pages/test';


export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
	  ...Links,
    ...StyleGuide,
	  ...Home,
    ...Search,
    ...Menu,
    ...IndividualProduct,
    ...Test,
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
