import laravelIcon  from '../../assets/laravel.svg';
import reactIcon from '../../assets/react.svg';
import cssIcon from '../../assets/css3.svg';
import htmlIcon from '../../assets/html5.svg';
import githubIcon from '../../assets/github-alt.svg';
import gitIcon from '../../assets/git-alt.svg';
import dbIcon from '../../assets/database.svg';

export default function() {
    return (
        <section>
            <h3>Tools of the trade</h3>
            <div>
                <ul>
                    <li><img src={laravelIcon} alt="Laravel logo"/> Laravel </li>
                    <li><img src={reactIcon} alt="reactIcon"/> ReactJS </li>
                    <li><img src={cssIcon} alt="css3 logo"/> CSS3 </li>
                    <li><img src={htmlIcon} alt="HTML logo"/>HTML5</li>
        
                </ul>
            </div>
        </section>
    );
}
