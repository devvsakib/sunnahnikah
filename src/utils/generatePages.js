import dynamic from 'next/dynamic';

const generatePages = (routes) => {
    const pages = {};

    routes.forEach((route) => {
        const { path, component } = route;
        pages[path] = dynamic(() => import(`../pages/${component}`));
    });

    return pages;
}

export default generatePages;
