import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const Expertise = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section id="expertise" className="pt-10 pb-24 w-5/6 mx-auto">
            {/* HEADER AND IMAGE SECTION */}
            <div className="text-center mt-32">
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
                    <p className="font-poppins font-semibold text-6xl mb-5">
                        MON EXPERTISE
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </motion.div>
            </div>
            {/* Expertise */}
            <div className="md:flex md:justify-between mt-16">
                {/* Designer */}
                <motion.div
                    className="md:w-1/3 mt-10 p-10 border-blue border-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="z-10">
                            <p className="font-poppins font-semibold text-3xl mt-3 lg:flex lg:gap-5 text-center">
                                <img
                                    className="icon mb-10"
                                    src="../assets/settings.png"
                                    alt="back-end"
                                />{' '}
                                Développement <br></br> Front-End
                            </p>
                            <div className="my-5 text-center">
                                <ul className="list-skills">
                                    <li>Bases de données</li>
                                    <li>API Postman</li>
                                    <li>JavaScript</li>
                                    <li>NestJs</li>
                                    <li>PHP</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Front end dev */}
                <motion.div
                    className="md:w-1/3 mt-10 p-10 border-blue border-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="z-10">
                            <p className="font-poppins font-semibold text-3xl mt-3 lg:flex lg:gap-5 text-center">
                                <img
                                    className="icon"
                                    src="../assets/atom.png"
                                    alt="front-end"
                                />{' '}
                                Développement <br></br> Back-End
                            </p>
                            <div className="my-5 text-center">
                                <ul className="list-skills">
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Typescript</li>
                                    <li>PHP</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Tailwind CSS</li>
                                    <li>Less</li>
                                    <li>Liquid</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10 p-10 border-blue border-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="z-10">
                            <p className="font-poppins font-semibold text-3xl mt-3 lg:flex lg:gap-5 text-center">
                                <img
                                    className="icon"
                                    src="../assets/web-design.png"
                                    alt="design"
                                />{' '}
                                Design
                            </p>
                            <div className="my-5 text-center">
                                <ul className="list-skills">
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Animate</li>
                                    <li>Adobe Audition</li>
                                    <li>Adobe Premiere Pro</li>
                                    <li>Adobe After Effect</li>
                                    <li>Adobe XD</li>
                                    <li>Figma</li>
                                    <li>Axure RP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="relative">
                    <div className="z-10">
                        <img
                            className="skills-img"
                            src="../assets/skills.png"
                            alt="skills"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default Expertise;
