import AnchorLink from 'react-anchor-link-smooth-scroll';
const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-blue before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-blue before:left-[-50%]
    before:top-[-50%]`;
    return (
        <div className="flex flex-col gap-6 fixed top-[50%] right-7">
            <AnchorLink
                className={`${
                    selectedPage === 'accueil' ? selectedStyles : 'bg-dark-grey'
                }
            w-3 h-3 rounded-full`}
                href="#accueil"
                onClick={() => setSelectedPage('accueil')}
            />
            <AnchorLink
                className={`${
                    selectedPage === 'expertise'
                        ? selectedStyles
                        : 'bg-dark-grey'
                }
            w-3 h-3 rounded-full`}
                href="#expertise"
                onClick={() => setSelectedPage('Expertise')}
            />
            <AnchorLink
                className={`${
                    selectedPage === 'projets'
                        ? selectedStyles
                        : 'bg-dark-grey'
                }
            w-3 h-3 rounded-full`}
                href="#projets"
                onClick={() => setSelectedPage('Projets')}
            />
            <AnchorLink
                className={`${
                    selectedPage === 'testimonials'
                        ? selectedStyles
                        : 'bg-dark-grey'
                }
            w-3 h-3 rounded-full`}
                href="#témoignages"
                onClick={() => setSelectedPage('testimonials')}
            />
            <AnchorLink
                className={`${
                    selectedPage === 'contact' ? selectedStyles : 'bg-dark-grey'
                }
            w-3 h-3 rounded-full`}
                href="#contact"
                onClick={() => setSelectedPage('contact')}
            />
        </div>
    );
};
export default DotGroup;
