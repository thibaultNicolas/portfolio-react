import React, { useState } from 'react';
import './portfolio.css';
import data from './data';
import { motion } from 'framer-motion';

function Projets() {
    return (
        <section className="portfolio mtop" id="projets">
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
                                <span class="text-salmon">/</span>Portfolio
                            </h3>
                        </div>
                        <div className="text-forest-green mt-5 col-8">
                            <h2 className="display-3">
                                Jetez un oeil aux derniers projets que j'ai
                                réalisés
                            </h2>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="cards">
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
                    <div className="portfolio-card">
                        <div className="box">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="overlay">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projets;
