
export default [
	{
	path: '/search/',
	exact: true,
	component: () => import('../components/search'),
	},
	{
		path: '/search-result/',
		exact: true,
		component: () => import('../components/search-result'),
	},
	{
		path: '/no-result/',
		exact: true,
		component: () => import('../components/search-result/no-result'),
	},
	{
		path: '/deals-results/',
		exact: true,
		component: () => import('../components/search-result/deals-results'),
	},
];
