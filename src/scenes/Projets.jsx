import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
    const projectTitle = title.split(' ').join('-').toLowerCase();
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-poppins">{title}</p>
                <p className="mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
        <section id="projets" className="pt-48 pb-48 w-5/6 mx-auto">
            {/* HEADINGS */}
            <div className="md:flex md:justify-between md:gap-16 mt-15">
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
                    <div class="col-12">
                        <h3 className="subtitle text-forest-green font-poppins font-semibold text-6xl mb-5">
                            <span class="text-salmon">/</span>Projets
                        </h3>
                    </div>
                </motion.div>
            </div>
            {/* PROJECTS */}
            <div className="flex justify-center mt-20">
                <motion.div
                    className="sm:grid sm:grid-cols-2 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-poppins font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>

                    <Project title="Project 1" />
                    <Project title="Project 2" />

                    {/* ROW 2 */}
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    {/* ROW 3 */}
                    <Project title="Project 6" />
                    <Project title="Project 7" />

                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-poppins font-semibold">
                        SMOOTH USER INTERFACES
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Projects;
