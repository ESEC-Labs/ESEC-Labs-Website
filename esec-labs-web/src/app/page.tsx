import Container from "../components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center text-center space-y-32">

          {/* Hero Section */}
          <section id="home" className="pt-24">
            <h1 className="text-5xl font-bold text-black">
              Embedding security in the source
            </h1>
            <Link href="#contact">
              <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Contact Us
              </button>
            </Link>
          </section>

          {/* About Section */}
          <section id="about" className="w-full max-w-3xl text-left">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a cybersecurity lab focused on embedded systems, firmware security, and research-based tooling. Our mission is to make devices safer at the core.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full max-w-3xl text-left">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Firmware unpacker & analyzer</li>
              <li>Memory dump & recovery toolkit</li>
              <li>Secure IoT weather station</li>
              <li>Rust-based microcontroller auditing tools</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full max-w-3xl text-left">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 mb-2">Want to collaborate or learn more?</p>
            <a
              href="mailto:esec@example.com"
              className="inline-block mt-2 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Email Us
            </a>
          </section>

        </div>
      </Container>
    </div>
  );
}

