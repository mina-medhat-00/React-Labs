export default function About() {
  return (
    <section id="about" className="py-5 bg-light p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png?20240121032759"
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-5 fw-bold mb-4 text-primary">About Me</h2>
            <p className="mb-3">
              Hi there! I'm Mina Medhat, a Web Developer with of experience in
              MERN stack. I specialize in full-stack engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
