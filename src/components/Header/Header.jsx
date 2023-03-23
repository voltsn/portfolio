import Menu from '../Menu/Menu';

export default function Header() {
    const menuItems = [
        {label: 'Home', link: '#'},
        {label: 'About', link: '#'},
        {label: 'Project', link: '#'},
        {label: 'Contact', link:'#'}
    ]

    return (
        <header>
            <Menu menuItems={menuItems} />
        </header>
    )
}
