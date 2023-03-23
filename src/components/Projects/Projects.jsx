import listOfProjects from "../../data/projects.json"; 

function Tag({label}) {
    return (
        <li className="tag"><span>{label}</span></li>
    );
}

function Project({title, image, tags, description, link}) {
    return (
        <article className="project">
            <header className="project__header">
                <img className="project__header__gif" src={image} alt="project gif" />
            </header>
            <div>
                <h3>{title}</h3>
                <ul className="project__tags">
                    {tags.map((tag) => (<Tag label={tag} />))}
                </ul>
                <p className="project__description">{description}</p>
                <ul className="project__links">
                    <li><a href={link.live} target="_blank">View live demo</a></li>
                    <li>
                        <a href={link.github} target="_blank">View code on github</a>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default function Projects() {

    return (
        <section className="projects" id="projects">
            <h2> Projects </h2>
            <div className="projects__container">
                {listOfProjects.projects.map((project) => (<Project {...project} />))}
            </div>
        </section>
    );
}
