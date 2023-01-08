import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end pt-16 ,t-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return (
        <section id="testimonials" className="pt-10 pb-24">
            {/* HEADING */}

            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    TESTIMONIALS
                </p>
                <LineGradient width="w-2/4" />
                <p className="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                </p>
            </motion.div>

            {/* T */}
        </section>
    );
};
export default Testimonials;
