export default function Hero() {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center bg-primary text-white p-4">
      <div className="container py-3">
        <div className="rounded-lg p-5 shadow-lg bg-opacity-75 bg-dark">
          <h1 className="display-4 fw-bold mb-3">Hello, I'm Mina Medhat</h1>
          <p className="lead mb-4">
            A passionate Full Stack Developer with a love for building amazing
            web applications.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="#projects"
              className="btn btn-light btn-lg rounded-pill shadow"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="btn btn-outline-light btn-lg rounded-pill shadow"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
