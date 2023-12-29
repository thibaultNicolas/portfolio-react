import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
    return (
        <footer className="h-64 bg-deep-blue pt-10">
            <div className="w-5/6 mx-auto">
                <div className="footer-icon">
                    <SocialMediaIcons />
                </div>

                <div className="md:flex justify-center md:justify-between text-center">
                    <a
                        href="/"
                        className="font-poppins text-3xl font-bold text-white"
                    >
                        Thibault.
                    </a>
                    <p className="font-poppins text-md text-white">
                        @2023 Thibault. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
