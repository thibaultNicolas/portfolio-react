import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cv from '../static/media/thibaultn_cv_2023.pdf';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section
            id="accueil"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-1/2 z-10 mt-16 md:mt-32 mb-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20">
                        <img
                            src="assets/profile-image-nicolas-2.png"
                            alt="profile"
                            className="transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]"
                        />
                    </div>
                ) : (
                    <img
                        src="assets/profile-image-nicolas-2.png"
                        alt="profile"
                        className="transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                    />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-1/2 mt-12 md:mt-32 p-5">
                {/* HEADING SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="bg-content-brush text-5xl font-poppins z-10 text-center md:text-start">
                        Nicolas {''}
                        <span
                            className="xs:relative xs:text-white xs:font-semibold z-20
                        xs:before:content-brush before:absolute before:-left-[25px] before:-top-[85px] before:z-[-1]
                        "
                        >
                            Thibault
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start w-5/6 mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                </motion.div>

                {/* CALL TO ACTION */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-blue text-white  py-3 px-7 font-semibold hover:bg-deep-blue hover:text-white border-2 border-blue hover:border-deep-blue transition duration-500"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Me contacter
                    </AnchorLink>
                    <AnchorLink
                        className="bg-white text-blue  py-3 px-7 font-semibold hover:bg-deep-blue hover:text-white border-2 border-blue hover:border-deep-blue transition duration-500"
                        href={cv}
                    >
                        Télécharger mon CV
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};
export default Landing;
