import './About.css';
import ProfileImage from '/profile.webp';

export default function About() {
    return (
        <section id='about' className='about container'>
            <h2 className='about__heading'>About Me</h2>
            <div className='about__content'>
                <div className='about__text'>
                    <p className='about__text__paragraph'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Urna porttitor rhoncus dolor purus non enim praesent
                        elementum facilisis.
                    </p>
                    
                    <p className='about__text__paragraph'>
                        Quis eleifend quam adipiscing vitae proin sagittis nisl
                        rhoncus. Sodales ut eu sem integer vitae justo eget magna
                        fermentum.Dictumst quisque sagittis purus sit amet volutpat 
                        consequat mauris. Sit amet est placerat in egestas erat 
                        imperdiet sed. 
                    </p>

                    <p className='about__text__paragraph'>
                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum
                        odio. Ultrices dui sapien eget mi proin sed libero. 
                        Purus gravida quis blandit turpis cursus. Amet nisl purus
                        in mollis nunc lsed id semper.Quis blandit turpis cursus in
                        hac habitasse platea dictumst. 
                    </p>
                </div>
                <div className='about__img'>
                    <img src={ProfileImage} alt="picture of arno volts"/>
                </div>
            </div>
        </section>
    );
}
