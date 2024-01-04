import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section id="accueil" className="bg-forest-green ">
            <div className="mx-auto container-default w-container row md:flex md:justify-between md:items-center py-10 flex">
                {/* MAIN SECTION */}
                <div className="col-12 col-md-7 p-5 md:flex-col md:flex md:justify-between md:items-center ">
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
                        <h1 className="text-beige z-10 md:text-start display-2 mg-bottom-12px">
                            <span className="emoji">&#128075;</span>
                            Je suis <br></br>Nicolas Thibault.
                        </h1>
                        <h2 className="text-beige z-10 md:text-start mg-bottom-12px">
                            Développeur web
                        </h2>
                        <p className="text-beige md:text-start text-item-center  mx-auto">
                            Passionné d'informatique depuis plusieurs années,
                            j'adore relever de nouveaux défis, apprendre et
                            utiliser de nouvelles technologies.
                        </p>
                    </motion.div>

                    {/* CALL TO ACTION */}
                    <motion.div
                        className="flex mt-2 justify-center md:justify-start w-100"
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
                            href="mailto:nicolasthibault@hotmail.ca"
                        >
                            Me contacter
                        </AnchorLink>
                    </motion.div>

                    <motion.div
                        className="flex mt-2 justify-center md:justify-start w-100"
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

                {/* IMAGE SECTION */}
                <div className="col-12 col-md-5">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0">
                            <img
                                src="assets/nic.png"
                                alt="profile"
                                className="transition duration-500 z-10 w-full w-100 md:max-w-[500px]"
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
            </div>
        </section>
    );
};
export default Landing;
