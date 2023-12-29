import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const About = ({ setSelectedPage }) => {
    return (
        <section id="about" className="py-10 mx-auto">
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
                        <h2 className="text-forest-green font-poppins font-semibold text-6xl mb-5">
                            À propos
                        </h2>
                    </div>

                    <div className="text-forest-green flex justify-center mt-5  gap-16">
                        <div class="col-md-6 flex flex-col gap-4">
                            <h3>I’ve been developing websites since 2010</h3>
                            <p>
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim
                                id est laborum aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat.
                            </p>
                            <AnchorLink
                                className="btn-primary-salmon transition duration-500 w-max"
                                onClick={() => setSelectedPage('contact')}
                                href="#contact"
                            >
                                En savoir plus
                            </AnchorLink>
                        </div>
                        <div class="col-md-6">
                            <div class="flex">
                                <div class="flex align-center">
                                    <div class="">
                                        12
                                    </div>
                                    <div class="text-300 bold">
                                        Years of experience
                                    </div>
                                </div>
                                <div class="flex align-center">
                                    <div class="">
                                        150
                                    </div>
                                    <div class="text-300 bold">
                                        Successful projects
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default About;
