import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

    return (
    <section id="home" className='md:flex md:justify-between md:items-center'>

    </section>
    );
};
export default Landing;
