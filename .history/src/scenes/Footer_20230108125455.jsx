import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () =>{
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:flex justify-center md:justify-between text-center">
                    <p>Nicolas Thibault</p>
                    <p>@2023 Thibault. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;