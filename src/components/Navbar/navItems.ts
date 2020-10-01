interface NavItem {
    text: string;
    route: 'home'|'dogsIndex'|'signUp';
}

const navItems: Array<NavItem> = [
    {
        text: 'home',
        route: 'home',
    },
    {
        text: 'dogs',
        route: 'dogsIndex',
    },
];

export default navItems;
