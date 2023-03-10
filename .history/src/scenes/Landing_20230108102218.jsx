import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className='relative z-0 ml-20 before:absolute before:-top-20'>
                        <img src="assets/profile-image.png" alt="profile"/>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </section>
    );
};
export default Landing;
