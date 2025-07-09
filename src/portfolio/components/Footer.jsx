export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 p-4 rounded-top-lg shadow-lg">
      <div className="container text-center">
        <p className="mb-3">
          &copy; {new Date().getFullYear()} Mina Medhat. All rights reserved.
        </p>
        <p>Built with React and Bootstrap.</p>
      </div>
    </footer>
  );
}
