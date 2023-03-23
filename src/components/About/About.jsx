import ProfileImage from '/profile.webp';

export default function About() {
    return (
        <section id='about'>
            <div>
                <h2>About Me</h2>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Urna porttitor rhoncus dolor purus non enim praesent
                    elementum facilisis.
                </p>
                
                <p>
                    Quis eleifend quam adipiscing vitae proin sagittis nisl
                    rhoncus. Sodales ut eu sem integer vitae justo eget magna
                    fermentum.Dictumst quisque sagittis purus sit amet volutpat 
                    consequat mauris. Sit amet est placerat in egestas erat 
                    imperdiet sed. 
                </p>

                <p>
                    Eu tincidunt tortor aliquam nulla facilisi cras fermentum
                    odio. Ultrices dui sapien eget mi proin sed libero. 
                    Purus gravida quis blandit turpis cursus. Amet nisl purus
                    in mollis nunc lsed id semper.Quis blandit turpis cursus in
                    hac habitasse platea dictumst. 
                </p>
            </div>
            <div>
                <img src={ProfileImage} alt="picture of arno volts"/>
            </div>
        </section>
    );
}
