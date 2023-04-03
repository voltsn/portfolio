import listOfProjects from "../../data/projects.json"; 
import "./Projects.css";

function Tag({label}) {
    return (
        <span className="tag">{label}</span>
    );
}

function Project({title, image, tags, description, link}) {
    return (
        <article className="project">
            <header className="project__header">
                <img className="project__header__img" src={image} alt="project gif" />
            </header>
            <div className="project__text">
                <h3 className="project__heading">{title}</h3>
                <ul className="project__tags">
                    {tags.map((tag) => (<li key={crypto.randomUUID()}><Tag label={tag} /></li>))}
                </ul>
                <p className="project__description">{description}</p>
                <ul className="project__links">
                    <li key={crypto.randomUUID()}>
                        <a href={link.live} target="_blank">View live demo</a>
                    </li>
                    <li key={crypto.randomUUID()}>
                        <a href={link.github} target="_blank">View code on github</a>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default function Projects() {

    return (
        <section className="projects container" id="projects">
            <h2 className="projects__heading"> Projects </h2>
            <div className="projects__container">
                {listOfProjects.projects.map((project) => (<Project {...project} />))}
            </div>
        </section>
    );
}
