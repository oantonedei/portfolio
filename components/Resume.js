const Resume = () => {
  return (
    <div className="section resume">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item active">
                <div className="date">2023 - Present</div>
                <div className="name">
                  Senior Software Engineer - HeartCentrix Solutions
                </div>
                <p>
                  Developed scalable backend services in a micro-service
                  architecture for end client, enhancing the web app product 
                  checkout process with a focus on security and efficiency.
                  Contributed to migrating the cache mechanism from Redis to MongoDB,
                  reducing transaction latency and improving data retrieval on the cloud.
                  Collaborated on product planning and utilized IBM Cloud
                  Kubernetes and Git Actions for monitoring and CI/CD, ensuring
                  smooth deployment and functionality.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2020 - 2023</div>
                <div className="name">
                  Senior Software Engineer - BIXT Global LTD
                </div>
                <p>
                  Spearheaded the development of reusable web components in
                  React and Angular, while implementing RESTful APIs with Java
                  Spring Boot and Node.js to enhance communication. Developed
                  rigorous unit tests for UI components and utilized AWS
                  services for event management and secure content delivery.
                  Mentored junior team members, boosting productivity by 25% and
                  reducing error rates by 15%, leading to more efficient project
                  execution.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2017 - 2020</div>
                <div className="name">
                  Software Engineer - Core Elite's Tekhub LTD
                </div>
                <p>
                  Developed unit tests with JUnit and Mockito, boosting test
                  coverage by 40% and cutting production defects by 25%.
                  Integrated microservices in Spring Boot for a fintech product,
                  resolving 15 bugs weekly and reducing customer-reported issues
                  by 30%. Collaborated with non-technical teams on database
                  design and maintained RESTful endpoints, enhancing service
                  efficiency and stability.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">2022 - 2024</div>
                <div className="name">
                  Master's Degree - Maharishi International University
                </div>
                <p>
                  Earned an M.Sc in Computer Science from Maharishi
                  International University.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2012 - 2016</div>
                <div className="name">
                  Bachelor's Degree - Madonna University
                </div>
                <p>
                  Graduated with honours from the prestigious Madonna University
                  with a B.Sc in Computer Science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
