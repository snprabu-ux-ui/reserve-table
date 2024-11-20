import MenuImage1 from '../assets/greek salad.jpg'
const Highlights = () => {
    return(
        <div className="highliht-container">
            <h3>Title</h3>
            <div className='cta-container'>
                <a href="https://www.little-lemon.com" className="default-btn">Order Online</a>
            </div>
            <div className="tiles-section">
                <div className="tile">
                    <img src={MenuImage1} alt="menu"></img>
                    <h5 className="label-menu">Menu Name</h5>
                    <span className="label-price">25.50</span>
                    <p>
                        description description description description description description description description description description 
                    </p>
                    <span className="label-order">Order a delivery</span>
                </div>
                <div className="tile">
                    <img src={MenuImage1} alt="menu"></img>
                    <h5 className="label-menu">Menu Name</h5>
                    <span className="label-price">25.50</span>
                    <p>
                        description description description description description description description description description description 
                    </p>
                    <span className="label-order">Order a delivery</span>
                </div>
                <div className="tile">
                    <img src={MenuImage1} alt="menu"></img>
                    <h5 className="label-menu">Menu Name</h5>
                    <span className="label-price">25.50</span>
                    <p>
                        description description description description description description description description description description 
                    </p>
                    <span className="label-order">Order a delivery</span>
                </div>
            </div>
        </div>
    )
}

export default Highlights;