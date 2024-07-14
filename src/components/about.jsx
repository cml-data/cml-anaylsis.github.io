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
                        been spent as a full stack developer at NWEA (now HMH), helping develop features for k-12 reading fluency testing platforms
                        and writing bespoke, teacher and parent-based, data-driven visualizations for our underlying research data.
                        My strongest aspects as a developer are troubleshooting code-bases that are unfamiliar and designing solutions that are efficient and robust.
                        In the past year, I have began moving my career toward data science and am currently completing a Masters in Data Science.  I love the data-driven
                        aspect of my work and would like to dig more deeply into datasets to find answers that help people.
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