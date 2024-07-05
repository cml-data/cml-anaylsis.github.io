import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        My career path has taken twists and turns.
                        I graduated with a degree in Computer Systems Engineering,
                        but my first job was taking care of Sun Solaris systems for the
                        CAD department at Microchip Technology, where I did everything from
                        wiring up the network and replacing internal parts to writing automation scripts for various projects.
                        I learned a lot about Unix, then Linux (as we moved on from Solaris) in this position and this
                        knowledge has been invaluable as my career moved on.  It translates directly to understanding deployment pipelines
                        and setting up EC2 servers in AWS.  From there, I moved on to a QA automation position with Blackboard and
                        learned the good and bad about attempting to automate all of your browser testing.  I have a good understanding
                        of the strengths and weaknesses of automation frameworks and a deep respect for writing testable code.  The last 10 years
                        been spent as a full stack developer at NWEA (now HMH).  My development
                        practice pulls from all of my previous experiences and allows me to quickly troubleshoot issues and solve complex problems.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='images/IMG_5277.jpeg' className="profile-img" width={300} height={500} alt="Camping with Lucy" />
                </div>
            </div>
        </div>

    )
}

export default About;