import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="contact" className="py-25">
            {/* HEADER AND IMAGE SECTION */}
            <div className="text-center mt-20 mb-20">
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
                        ME CONTACTER
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </motion.div>
            </div>
            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    className="basis-1/2 flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img
                        src="../assets/contact.png"
                        alt="contact"
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    className="w-5/6 m-0 m-auto basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/61e53b86e89f1141cb8578e3f2dd542c"
                        method="POST"
                    >
                        <input
                            className="w-full bg-white border-blue border-2 active:border-blue font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NOM COMPLET"
                            {...register('name', {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' &&
                                    'This field is required.'}
                                {errors.name.type === 'maxLength' &&
                                    'Max length is 100 char'}
                            </p>
                        )}

                        <input
                            className="w-full bg-whit border-blue border-2 active:border-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="COURRIEL"
                            {...register('email', {
                                required: true,
                                pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />

                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === 'required' &&
                                    'This field is required.'}
                                {errors.email.type === 'pattern' &&
                                    'Invalid email address.'}
                            </p>
                        )}

                        <textarea
                            className="w-full bg-white text-blue border-blue border-2 active:border-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register('message', {
                                required: true,
                                maxLength: 250,
                            })}
                        />

                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === 'required' &&
                                    'This field is required.'}
                                {errors.message.type === 'maxLength' &&
                                    'Max length is 250 char'}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="p-5 bg-white border-blue border-2 active:border-blue font-semibold text-deep-blue mt-5 hover:bg-blue hover:text-white transition duration-500"
                        >
                            ENVOYER
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
