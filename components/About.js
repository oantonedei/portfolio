const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/profile.jpg" alt="" />
        </div>
        <div className="desc">
          <p>
            I believe solutions to any technical problem can be easily generated
            once the problem statement is fully understood.<br></br>
            <br></br> Over the past 6 years, I have consistently demonstrated my
            ability to generate performant solutions by deeply understanding the
            problem statement at hand (both technical and non-technical). My
            focus has been on identifying and resolving core technical issues
            that hinder the optimal execution of essential business tasks
            through the creation of software products or tools. I have
            successfully led various projects through all phases of the SDLC,
            architected the design and development of efficient & scalable
            microservices, and developed customer journey maps, while leveraging
            key insights from stakeholders to deliver feature updates and
            software products with the use of modern technologies and tools.{" "}
            <br></br>
            <br></br>I enjoy collaborating with professionals across diverse
            disciplines, and I thrive in constructive brainstorming sessions
            with fellow developers and cross-functional teams, fostering an
            environment of collaborative problem-solving.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Antonedei Otoro
              </li>
              <li>
                <strong>Job:</strong> Senior Software Engineer
              </li>
              {/* <li>
                <strong>Citizenship:</strong> Ukraine
              </li> */}
              <li>
                <strong>Residence: </strong> Dallas, TX
              </li>
              <li>
                <strong>E-mail:</strong> antonedei.otoro@engineer.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
