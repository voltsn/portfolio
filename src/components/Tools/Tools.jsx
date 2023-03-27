import './Tools.css';
import laravelIcon  from '../../assets/laravel.svg';
import reactIcon from '../../assets/react.svg';
import cssIcon from '../../assets/css3.svg';
import htmlIcon from '../../assets/html5.svg';
import githubIcon from '../../assets/github-alt.svg';
import gitIcon from '../../assets/git-alt.svg';
import dbIcon from '../../assets/database.svg';

function ToolsItem({icon, label, iconDescription}) {

    return (
       <li><img src={icon} alt={iconDescription}/>{label}</li> 
    );
}

export default function Tools() {
    return (
        <section id='tools' className='tools container'>
            <h2 className='tools__heading'>Tools of the trade</h2>
            <div className='tools__content'>
                <ul className='toolsList'>
                    <ToolsItem 
                        icon={laravelIcon} 
                        iconDescription={"laravel Logo"} 
                        label={"Laravel"}
                    />
                    <ToolsItem 
                        icon={reactIcon}
                        iconDescription={"React.js Logo"}
                        label={"React.js"}
                    />
                    <ToolsItem 
                        icon={cssIcon}
                        iconDescription={"CSS 3 Logo"}
                        label={"CSS3"}
                    />
                    <ToolsItem 
                        icon={htmlIcon}
                        iconDescription={"HTML 5 Logo"}
                        label={"HTML5"}
                    />
                    <ToolsItem
                        icon={githubIcon}
                        iconDescription={"Github Logo"}
                        label={"Github"}
                    />
                    <ToolsItem
                        icon={gitIcon}
                        iconDescription={"Git Logo"}
                        label={"Git"}
                    />
                    <ToolsItem
                        icon={dbIcon}
                        iconDescription={"Database icon"}
                        label={"Sql"}
                    />
                </ul>
            </div>
        </section>
    );
}
