import AnchorLink from 'react-anchor-link-smooth-scroll';
const DotGroup = ({ selectedPage, setSelectedPage }) => {
    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${
                    selectedPage === 'home' ? 'text-yellow' : ''
                }
            hover:text-yellow transition duration-500`}
                href=
                onClick={() => setSelectedPage('home')}
            >
                {page}
            </AnchorLink>
        </div>
    );
};
export default DotGroup;
