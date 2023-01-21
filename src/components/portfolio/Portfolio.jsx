import React, { useState } from 'react';
import './portfolio.css';
import data from './data';
import LineGradient from '../LineGradient';
import { motion } from 'framer-motion';

function Projets() {
    const [item, setItem] = useState(data);

    const filterItem = (cateItem) => {
        const updateItem = data.filter((curElem) => {
            return curElem.category === cateItem;
        });
        setItem(updateItem);
    };
    return (
        <section className="portfolio mtop" id="projets">
            <div className="container">
                <div className="head flexSB">
                    {/* HEADER AND IMAGE SECTION */}
                    <div className="text-center mt-20">
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
                                MES PROJETS
                            </p>
                            <div className="flex justify-center mt-5">
                                <LineGradient width="w-1/3" />
                            </div>
                        </motion.div>
                    </div>
                </div>
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
                    <div className="links">
                        <ul className="flexSB">
                            <li
                                className="active"
                                onClick={() => setItem(data)}
                            >
                                All
                            </li>
                            <li onClick={() => filterItem('design')}>Design</li>
                            <li onClick={() => filterItem('programmation')}>
                                Programmation
                            </li>
                            <li onClick={() => filterItem('integration')}>
                                Intégration
                            </li>
                            <li onClick={() => filterItem('multimedia')}>
                                Multimédia
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <div className="content grid mtop">
                    {item.map((elem) => {
                        const { cover, title } = elem;
                        return (
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
                                <div className="box">
                                    <div className="img">
                                        <img src={cover} alt="" />
                                    </div>
                                    <div className="overlay">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projets;
