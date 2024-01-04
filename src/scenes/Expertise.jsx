import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const dataExpertise = [
    {
        name: 'HTML',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/html.png',
    },
    {
        name: 'CSS',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/css-3.png',
    },
    {
        name: 'SASS',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/sass.png',
    },
    {
        name: 'Javascript',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/java-script.png',
    },
    {
        name: 'React JS',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/atom.png',
    },
    {
        name: 'Typescript',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/typescript.png',
    },
    {
        name: 'C#',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/c-sharp.png',
    },
    {
        name: 'PHP',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/php.png',
    },
    {
        name: 'GitHub',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/github.png',
    },
    {
        name: 'Illustrator',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/illustrator.png',
    },
    {
        name: 'Photoshop',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/photoshop.png',
    },
    {
        name: 'Adobe XD',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/xd.png',
    },

    {
        name: 'Figma',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/figma.png',
    },
    {
        name: 'Prestashop',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/prestashop.png',
    },
    {
        name: 'Wordpress',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/wordpress.png',
    },
    {
        name: 'Shopify',
        text: 'Duis aute irure dolor in reprehenderit in voluptate.',
        icon: '/assets/skills/shopify.png',
    },
];

const Expertise = () => {
    return (
        <section id="expertise" className="py-10 mx-auto">
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
                            <h3 className="subtitle text-beige font-poppins font-semibold text-6xl mb-5">
                                <span class="text-salmon">/</span>Mon expertise
                            </h3>
                        </div>
                        <div className="text-beige mt-5 col-8">
                            <h2 className="display-3">Liste de compétences</h2>
                        </div>
                    </motion.div>
                </div>
                {/* Expertise */}
                <div className="mt-10 cards">
                    {dataExpertise.map((d) => (
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
                            <div key={d.name} className="expertise-cards mt-5">
                                <div className="pb-3">
                                    <img
                                        src={d.icon}
                                        alt=""
                                        className="h-10 w-10"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold">
                                        {d.name}
                                    </p>
                                    <p className="text-l">{d.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Expertise;
