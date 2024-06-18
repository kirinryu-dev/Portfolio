import AboutContainer from '../../Components/Container/AboutContainer';


// import custom css 
import './About.css'


const About = () => {
    return (
        <div className="About_content">
            <div className='About_description'>
            <h1 className='About_title'>About Me</h1>
            <p>
                <span> -👹 </span>
                I'm a React developer and marketing professional interested in full-stack development. Invested in front-end technologies at the moment, I create dynamic, user-friendly interfaces. With a strong marketing background, I craft web experiences that drive engagement and conversions, bridging the gap between technology and strategy to support business goals.
                
            </p>
            </div>
            <AboutContainer />
        </div>
    )
}

export default About ;