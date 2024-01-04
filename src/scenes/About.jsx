import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const About = ({ setSelectedPage }) => {
    return (
        <section id="about" className="py-10 mx-auto">
            <div className="container-default w-container">
                {/* HEADER AND IMAGE SECTION */}
                <div className="">
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
                        <div class="col-12">
                            <h3 className="subtitle text-forest-green font-poppins font-semibold text-6xl mb-5">
                                <span class="text-salmon">/</span>À propos
                            </h3>
                        </div>

                        <div className="text-forest-green flex justify-center mt-5 grid-2-columns _1-col-tablet">
                            <div class="about-me">
                                <img
                                    src="assets/nic-about.png"
                                    alt="profile"
                                    className="transition duration-500 z-10 w-full w-100"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="display-3">
                                    Je développe des sites Web depuis 2020
                                </h2>
                                <p>
                                    Je suis un développeur passionné de
                                    technologies, animé par un désir d'apprendre
                                    depuis mes jours au cégep. J'ai réalisé
                                    plusieurs projets qui ont renforcé mes
                                    compétences. Ma curiosité constante et ma
                                    volonté de relever des défis font de moi un
                                    développeur polyvalent, prêt à contribuer à
                                    des projets innovants.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default About;
