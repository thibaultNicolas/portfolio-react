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
                   
                </motion.div>
        </section>
    );
};
export default Testimonials;
