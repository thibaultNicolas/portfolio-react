import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }) => {
    const lowerCasePage = page.toLowerCase();
    const navbarTextColor = isTopOfPage
        ? 'text-beige border-beige'
        : 'text-beige border-beige';

    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'border-b-2 -mb-2' : ''
            }
             transition duration-500 hover:border-b-2 -mb-2 ${navbarTextColor}`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width:991px)');
    const navbarBackground = isTopOfPage ? '' : '';
    const logoColor = isTopOfPage ? 'text-beige' : 'text-beige';

    return (
        <nav className={`${navbarBackground} z-40 w-full py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <a
                    href="/"
                    className={`${logoColor} font-poppins text-3xl font-bold`}
                >
                    Thibault.
                </a>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 txt-sm font-semibold">
                        <Link
                            page="Accueil"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isTopOfPage={isTopOfPage}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isTopOfPage={isTopOfPage}
                        />
                        <Link
                            page="Expertise"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isTopOfPage={isTopOfPage}
                        />
                        <Link
                            page="Projets"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isTopOfPage={isTopOfPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isTopOfPage={isTopOfPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-salmon p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src="../assets/menu-icon.svg" alt="menu-icon" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed z-40 right-0 bottom-0 h-full bg-forest-green w-[100%]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <img
                                    src="../assets/close-icon.svg"
                                    alt="close-icon"
                                />
                            </button>
                        </div>
                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[5%] text-2xl text-white">
                            <Link
                                page="accueil"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                            />
                            <Link
                                page="Expertise"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
