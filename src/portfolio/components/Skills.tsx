export default function Skills() {
  return (
    <section className="py-5 bg-light p-4">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5 text-primary">
          My Skills
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded-lg border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-dark">Frontend</h5>
                <ul className="list-unstyled text-muted">
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm rounded-lg border-0">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-dark">Backend</h5>
                <ul className="list-unstyled text-muted">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>RESTful APIs</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
