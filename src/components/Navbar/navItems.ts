interface NavItem {
    text: string;
    route: 'home' | 'dogsIndex' | 'signUp' | 'adoptedDogsIndex';
}

const navItems: Array<NavItem> = [
    {
        text: 'home',
        route: 'home',
    },
    {
        text: 'available dogs',
        route: 'dogsIndex',
    },
    {
        text: 'adopted dogs',
        route: 'adoptedDogsIndex',
    },
];

export default navItems;
