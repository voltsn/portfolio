import './Hero.css';
import longArrow from '../../assets/icons/ui/longArrow.svg';
import gradientCircle from '../../assets/gradient-circle.svg';

function Preview({text, link, linkLabel, className}) {
    return (
        <article className={className.article}>
            <p className={className.p}>{text}</p>
            <div className={className.div}>
                <img src={longArrow} alt="Long right pointing arrow" width="102" height="22"/>
                <a href={link}>{linkLabel}</a>
            </div>
        </article>
    );
}

export default function Hero () {
    return (
        <section id='hero' className='hero container'>
            <h1 className='hero__heading'>
                Arno N. Volts
                <span className='hero__subHeading'>Junior Web Developer</span>
            </h1>
            
            <div className='previews'>
              <Preview
                    text="I am a web artisan based in Namur, Belgium. Currently looking for an internship starting the 29th of may 2023."
                    link="#about"
                    linkLabel="Learn more about me"
                    className={{article: 'preview', p: 'preview__description', div: 'preview__link'}}
                />

              <Preview 
                    text="As part of my training as junior web developer at becode. I had the possibility to work on multiple projects, solo and with teammates."
                    link="#projects"
                    linkLabel="View my work"
                    className={{article: 'preview', p: 'preview__description', div: 'preview__link'}}
                />

            </div>
            <img className='gradientCircle top' 
                src={gradientCircle} 
                alt="gradient circle" 
            />
            <img className='gradientCircle bottom'
                src={gradientCircle} 
                alt="gradient circle" />
        </section>
    );
}
