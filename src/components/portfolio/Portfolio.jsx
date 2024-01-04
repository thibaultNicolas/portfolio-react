import React, { useState } from 'react';
import './portfolio.css';
import data from './data';
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
                                    Tous
                                </li>
                                <li onClick={() => filterItem('design')}>
                                    Design
                                </li>
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
                </div>
                <div className="cards-portfolio mt-10">
                    {item.map((elem) => {
                        const { cover, title, description, category } = elem;
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
                                <a
                                    href="/portfolio/hatchery"
                                    class="card card-portfolio w-inline-block"
                                >
                                    <div class="image-wrapper card-portfolio">
                                        <img
                                            src={cover}
                                            alt={title}
                                            class="image card-portfolio"
                                        />
                                    </div>
                                    <div class="card-portfolio-content">
                                        <div class="portfolio-category-wrapper">
                                            <div class="portfolio-category">
                                                {category}
                                            </div>
                                        </div>
                                        <div class="portfolio-content-case-study-link">
                                            <h3 class="title card-portfolio text-xl font-semibold">
                                                {title}
                                            </h3>
                                            <p class="card-potrfolio-paragraph">
                                                {description}
                                            </p>
                                            <div class="card-portfolio-case-study-link">
                                                <div className="text-salmon font-semibold">
                                                    En savoir plus
                                                </div>
                                                <div class="card-portfolio-link-arrow-wrapper">
                                                    <div>
                                                        <img
                                                            className="arrow-icon"
                                                            src="assets/right-arrow-salmon.png"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projets;
