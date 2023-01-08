import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';^
import { motion } from 'framer-motion';

const container = {
    hidden:{},
    visible: {
        
    }
}

const Projects = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-2/5 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div>
                        <p className="font-playfair font-semibold text-4xl">
                            MY <span className="text-red">PRO</span>JECTS
                        </p>
                        <div className="flex justify-center mt-5">
                            <LineGradient width="w-1/3" />
                        </div>
                    </div>

                    <p className="mt-10 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                    </p>
                </motion.div>
            </div>
            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-2 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}

                ></motion.div>
            </div>
        </section>
    );
};
export default Projects;
