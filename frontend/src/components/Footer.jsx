import '../style/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footerUpperWrapper">
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <h6>(+46) 1234 56789</h6>
                </div>
                <div>
                    <i className="fa-solid fa-inbox"></i>
                    <h6>mustafaphoto111@gmail.com</h6>
                </div>
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <h6>Sweden/Katrineholm</h6>
                </div>
            </div>
            <div className="footerMiddleWrapper">
                <div>
                    <b>Lorem ipsum</b>
                    <h6>Lorem ipsumsit amet</h6>
                    <h6>Lorem ipsum dolor</h6>
                    <h6>Lorem ipsum dolor sit amet consectetur</h6>
                </div>
                <div>
                    <b>Lorem ipsum</b>
                    <h6>Lorem ipsumsit amet</h6>
                    <h6>Lorem ipsum dolor</h6>
                    <h6>Lorem ipsum dolor sit amet consectetur</h6>
                </div>
                <div>
                    <b>Lorem ipsum</b>
                    <h6>Lorem ipsumsit amet</h6>
                    <h6>Lorem ipsum dolor</h6>
                    <h6>Lorem ipsum dolor sit amet consectetur</h6>
                </div>
                <div>
                    <b>Lorem ipsumsit amet</b>
                    <h6>Lorem ipsum</h6>
                    <div>
                        <input type="text" placeholder='Lorem ipsum' />
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <h6>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur</h6>
                </div>
            </div>
            <div className="footerLowerWrapper">
                <div>
                    <h6>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur dolor Lorem ipsum</h6>
                </div>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-inbox"></i>
                    <i className="fa-brands fa-facebook-messenger"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
                <div>
                    <h6>&copy; 2025 Mustafa Altaie. All rights reserved.</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;