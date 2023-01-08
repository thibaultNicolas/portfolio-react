import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () =>{
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div>
                    <p>Nicolas Thibault</p>
                    <p>@2023 </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;