
export default [
  	{
    	path: '/menu/',
    	exact: true,
    	component: () => import('../components/menu'),
  	},
  	{
	    path: '/menu/menu-popup/',
		exact: true,
		component: () => import('../components/menu/menu-popup'),
	},
];
