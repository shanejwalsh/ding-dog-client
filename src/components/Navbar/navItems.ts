interface NavItem {
    text: string;
    route: 'home' | 'dogsIndex' | 'signUp' | 'adoptedDogsIndex';
    path: string;
}

const navItems: Array<NavItem> = [
    {
        text: 'home',
        route: 'home',
        path: '/',
    },
    {
        text: 'available dogs',
        route: 'dogsIndex',
        path: '/dogs',
    },
    {
        text: 'adopted dogs',
        route: 'adoptedDogsIndex',
        path: '/adopted-dogs',
    },
    {
        text: 'sign up',
        route: 'signUp',
        path: '/signup',
    },
];

export default navItems;
