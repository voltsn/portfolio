export default function Menu({menuItems, className }) {
    return (
        <nav className={className.nav}>
            <ul className={className.navItems}>
                {menuItems.map(item => 
                (
                    <li className={className.navItem} key={crypto.randomUUID()}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}