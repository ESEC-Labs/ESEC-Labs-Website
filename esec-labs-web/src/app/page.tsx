import Container from "../components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center text-center space-y-32">

          {/* Hero Section */}
          <section id="home" className="pt-24">
            <h1 className="text-5xl mb-4 font-bold text-black">
              Embedding security in the source
            </h1>
            <Link href="#contact">
              <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer">
                Contact Us
              </button>
            </Link>
          </section>

          {/* About Section */}
          <section id="about" className="w-full max-w-3xl text-left">
            <p className="text-2xl font-bold mb-4 text-gray-700 leading-relaxed">
              We are a cybersecurity lab focused on embedded systems, firmware security, and research-based tooling. 
            </p>

	    <p className="text-l text-gray-700 leading-relaxed">
	    	Our mission is to make devices safer at the core.
	    </p>
          </section>

          {/* Projects Section */}
	  <section id="projects" className="w-full max-w-3xl text-left ">
	    <p className="text-2xl font-bold mb-4 text-gray-700 leading-relaxed">
	      Check out our open source tooling.
	    </p>

	    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
	      {/* Card 1 */}
	      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100">
	        <p className="text-gray-700 text-lg font-semibold">Memory dump & recovery toolkit</p>

		<p className="text-gray-700 text-md py-4">Dumps detailed memory maps of microcontrollers. Filter through memory map and find desired information.</p>

		<Link href="https://github.com/ESEC-Labs/Memdump">
		      <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer">
			Github
		      </button>	
		</Link>
	      </div>

	      {/* Card 2 */}
	      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100">
	        <p className="text-gray-700 text-lg font-semibold">Firmware unpacker & analyzer</p>
	      </div>

	      {/* Card 3 */}
	      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100">
	        <p className="text-gray-700 text-lg font-semibold">Coming Soon</p>
	      </div>

	      {/* Card 4 */}
	      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100">
	        <p className="text-gray-700 text-lg font-semibold">Rust-based microcontroller auditing tools</p>
	      </div>
	    </div>
	  </section>


          {/* Contact Section */}
          <section id="contact" className="w-full max-w-3xl text-left">
            <h2 className="text-3xl font-bold mb-4 text-black">Contact</h2>
            <p className="text-gray-700 mb-2">Want to collaborate or learn more?</p>
            <a
              href="mailto:isaiahjohnson6225@gmail.com"
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

