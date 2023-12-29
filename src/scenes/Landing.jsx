import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section
            id="accueil"
            className="bg-forest-green md:flex md:justify-between md:items-center gap-16 py-10 flex"
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-1/3 z-10">
                {isAboveMediumScreens ? (
                    <div className="relative z-0">
                        <img
                            src="assets/nic.png"
                            alt="profile"
                            className="transition duration-500 z-10 w-full w-100"
                        />
                    </div>
                ) : (
                    <img
                        src="assets/nic.png"
                        alt="profile"
                        className="transition duration-500 z-10 w-full w-100"
                    />
                )}
            </div>

            {/* MAIN SECTION */}
            <div className="z-30 basis-2/3 p-5">
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
                    <h1 className="text-beige font-poppins z-10 text-center md:text-start">
                        Je suis Nicolas Thibault, développeur web.
                    </h1>
                    <p className="text-beige mt-10 mb-7 text-sm text-center md:text-start mx-auto">
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
                        className="btn-primary-salmon transition duration-500"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Me contacter
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
