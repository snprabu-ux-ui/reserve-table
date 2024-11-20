import Herobannerimage from '../assets/banner-image.jpg';

const Herosection = () => {
    return(
        <div className="herobanner-container">
            <div className="herobanner">
                <div className="herobanner-content">
                    <h2>
                        Herobanner Title
                    </h2>
                    <h4>
                        Herobanner Subtitle
                    </h4>
                    <p>
                        Herobanner description Herobanner description Herobanner description Herobanner description Herobanner description Herobanner description Herobanner description Herobanner description 
                    </p>
                    <a className="default-btn" href="http://www.little-lemon.com">Reserve a table</a>
                </div>
                <div className="herobanner-image">
                    <div className='image-container'>
                        <img src={Herobannerimage} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection;