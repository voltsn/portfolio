import Menu from '../Menu/Menu';

export default function Header() {
    const menuItems = [
        {label: 'Home', link: '#hero'},
        {label: 'About', link: '#about'},
        {label: 'Project', link: '#projects'},
        {label: 'Contact', link:'#'}
    ]

    return (
        <header>
            <Menu menuItems={menuItems} />
        </header>
    )
}
