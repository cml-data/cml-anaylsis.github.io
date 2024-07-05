import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="nav-profile">
            <Image src='images/profile.JPG' className="profile-img" width={300} height={300}
                   alt="Christina's photo"/>
            <div className="logo">
                Christina Lawrence
            </div>
            <div className="social-icons">
                <a
                    href="https://github.com/cml-data?tab=repositories"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/cmrlawrence/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/cmrlawrence/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-file"></i>
                </a>
            </div>
        </div>
    )
}

export default Navbar;