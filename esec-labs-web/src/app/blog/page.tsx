import Container from "../../components/ui/Container";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Container>
          <div className="flex flex-col items-center text-center space-y-32">

		  {/* Title and filter nav bar */}
		  <section className="pt-24">
		    <h1 className="text-5xl mb-4 font-bold text-black">
			Learn new skils
		    </h1>
		    <div className="justify-center">	
			    <nav className="font-bold absolute flex ">
				<input 
					className="w-128 bg-white text-black shadow-md rounded-lg p-4 border border-gray-200"
					type="text" 
					placeholder="Search for blogs..."

				/>
			    </nav>
		    </div>
		  </section>
	  </div>
      </Container>
    </div>
  );
}

