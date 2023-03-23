function MenuItem({label, link}) {
    return <li><a href={link}>{label}</a></li>;
}

export default function Menu({menuItems}) {
    return (
        <nav>
            <ul>
                {menuItems.map(item => (<MenuItem label={item.label} 
                                                  link={item.link}/>))}
            </ul>
        </nav>
    );
}