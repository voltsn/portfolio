import './Header.css';
import Menu from '../Menu/Menu';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';

export default function Header() {
    const menuItems = [
        {label: 'Home', link: '#hero'},
        {label: 'About', link: '#about'},
        {label: 'Project', link: '#projects'},
        {label: 'Contact', link:'#'}
    ]

    return (
        <header className='main-header container'>
            <ResponsiveMenu menuItemsClass={{nav: 'main-header__nav', navItem: 'main-header__nav__items__item', navItems: 'main-header__nav__items'}} menuItems={menuItems} />
        </header>
    )
}
