import './About.css';
import ProfileImage from '/mod_profile.webp';

export default function About() {
    return (
        <section id='about' className='about container'>
            <h2 className='about__heading'>About Me</h2>
            <div className='about__content'>
                <div className='about__text'>
                    <p className='about__text__paragraph'> 
                        Hi, I am Arno. A web artisan based in the city of Namur in Belgium. I'm currently enrolled in an intensive 7 month long bootcamp at <a href="https://becode.org/" taregt="_blank">becode</a> where I learn the art of crafting web applications. 
                    </p>
                    
                    <p className='about__text__paragraph'>
                        In addition to web development, I enjoy reading books and occasionally playing chess. I find that these hobbies help me stay creative and intellectually stimulated, which translates to my work as a developer.
                    </p>

                    <p className='about__text__paragraph'>
                        My goal is to use my skills and knowledge to build innovative and user-friendly websites that meet my clients's needs. I believe that the best websites are not only functional but also visually appealing and easy to use.
                    </p>

                    <p className='about__text__paragraph'>
                        Thank you for visiting my website, and I look forward to the opportunity to work with you!
                    </p>
                </div>
                <div className='about__img'>
                    <img src={ProfileImage} alt="picture of arno volts"/>
                </div>
            </div>
        </section>
    );
}
