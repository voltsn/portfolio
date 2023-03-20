import longArrow from '../../assets/longArrow.svg';

export default function () {
    return (
        <section>
            <h1>
                Arno N. Volts
                <span>Junior Web Developer</span>
            </h1>
            
            <div>
                <article>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magnaa
                    liqualiqualiquaialialiqua.
                    </p>
                    <p> 
                        <img 
                            aria-hidden="true" 
                            src={longArrow} 
                            alt="long right pointing arrow"
                        /> 
                        <a>Learn more about me</a>
                    </p>
                </article>

                <article>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magnaa
                    liqualiqualiquaialialiqua.
                    </p>
                    <p> 
                        <img 
                            aria-hidden="true" 
                            src={longArrow} 
                            alt="long right pointing arrow"
                        /> 
                        <a>View my work</a>
                    </p>
                </article>
            </div>
        </section>
    )
}
