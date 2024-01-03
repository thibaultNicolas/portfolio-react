import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
    return (
        <footer className="h-64 bg-forest-green py-10 mx-auto text-beige">
            <div className="container-default w-container">
                <div class="row">
                    <div className="col-12 col-md-6">
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <img
                                    src="assets/nic.png"
                                    alt="profile"
                                    className="transition duration-500 z-10 w-full w-100 md:max-w-[100px]"
                                />
                            </div>
                            <div class="col-12 col-md-8">
                                <h3 className="display-5">Nicolas Thibault</h3>
                                <p className="position">Développeur Web</p>
                            </div>
                            <div className="col-12">
                                <SocialMediaIcons />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="display-3">Entrer en contact</h2>
                        <div className="row">
                            <div className="mt-3 w-100 flex align-middle gap-2 items-center">
                                <a
                                    className="footer-link-wrapper"
                                    href="mailto:nicolasthibault@hotmail.ca"
                                >
                                    nicolasthibault@hotmail.ca
                                </a>
                                <img
                                    className="arrow-img"
                                    src="assets/right-arrow.png"
                                    alt=""
                                />
                            </div>
                            <div className="mt-3 w-100 flex align-middle gap-2 items-center">
                                <a
                                    className="footer-link-wrapper"
                                    href="tel:+1581882798"
                                >
                                    (581) 888-2798
                                </a>
                                <img
                                    className="arrow-img"
                                    src="assets/right-arrow.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="text-beige">Copyright © Thibault. | 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
