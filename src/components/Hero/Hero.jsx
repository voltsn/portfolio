import longArrow from '../../assets/longArrow.svg';

function Preview({text, link, linkLabel}) {
    return (
        <article>
            <p>{text}</p>
            <div>
                <img src={longArrow} alt="Long right pointing arrow"/>
                <a href={link}>{linkLabel}</a>
            </div>
        </article>
    );
}

export default function Hero () {
    return (
        <section id='hero'>
            <h1>
                Arno N. Volts
                <span>Junior Web Developer</span>
            </h1>
            
            <div>
              <Preview
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magnaa liqua."
                    link="#aboutme"
                    linkLabel="Learn more about me"
              />

              <Preview 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magnaa liqua."
                    link="#projects"
                    linkLabel="View my work"
              />
            </div>
        </section>
    );
}
