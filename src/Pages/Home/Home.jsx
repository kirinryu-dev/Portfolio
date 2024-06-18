import Navbar from '../../Components/Navigationbar/Navbar';
import ButtonContact from '../../Components/Button/ButtonContact';
import me from '../../Assets/me-no-bkg-simple.png';
import HomeFooter from '../../Components/HomeFooter/HomeFooter';

// custom css 
import './Home.css'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='Home_content'>
                <div className='content_left'>
                    <div>
                    <p>I'm <span>TCHALIM Sam Tanguy</span></p>
                    <p><span>REACT</span> DEVELOPER &</p>
                    <p><span>MARKETING</span> PROFESSIONAL</p>
                    </div>

                    <div className='content_left_bottom'>
                        <ButtonContact />
                    </div>
                </div>

                <div className='content_right'>
                    <img src={me} alt="" srcset="" />
                </div>
            </div>
            <HomeFooter />
        </div>
    )
};

export default Home;