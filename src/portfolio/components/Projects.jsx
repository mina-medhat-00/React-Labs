export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-white p-4">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5 text-primary">
          My Projects
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm rounded-lg border-0">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
                className="card-img-top rounded-top-lg"
                alt="Project 1"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">TaskSync</h5>
                <p className="card-text text-muted flex-grow-1">
                  TaskSync is a real-time task management web application built
                  with React, Node.js, Socket.IO, and MongoDB.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm rounded-lg border-0">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
                className="card-img-top rounded-top-lg"
                alt="Project 2"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">EcoCart</h5>
                <p className="card-text text-muted flex-grow-1">
                  EcoCart is a full-stack e-commerce site promoting sustainable
                  products. Developed with Next.js, Tailwind CSS, Stripe API,
                  and PostgreSQL.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm rounded-lg border-0">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
                className="card-img-top rounded-top-lg"
                alt="Project 3"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">FoodieFinder</h5>
                <p className="card-text text-muted flex-grow-1">
                  FoodieFinder helps users discover nearby restaurants using
                  Google Maps API, Express, and MongoDB. With geolocation,
                  real-time filtering, and user-generated reviews, it's
                  optimized for mobile and desktop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
