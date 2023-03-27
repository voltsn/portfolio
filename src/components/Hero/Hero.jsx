import './Hero.css';
import longArrow from '../../assets/longArrow.svg';
import gradientCircle from '../../assets/gradient-circle.svg';

function Preview({text, link, linkLabel, className}) {
    return (
        <article className={className.article}>
            <p className={className.p}>{text}</p>
            <div className={className.div}>
                <img src={longArrow} alt="Long right pointing arrow"/>
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
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magnaa liqua."
                    link="#aboutme"
                    linkLabel="Learn more about me"
                    className={{article: 'preview', p: 'preview__description', div: 'preview__link'}}
                />

              <Preview 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magnaa liqua."
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
