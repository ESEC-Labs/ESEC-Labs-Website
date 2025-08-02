import Container from "../../components/ui/Container";
import { fetchBlogs } from "../../components/server/fetchBlogs";
import Format from "../../components/ui/formatBlogs";
import Link from "next/link";

export default async function Blog() {
  const data = await fetchBlogs();

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

		  <section className="pt-24">
		  	<Format retrievedData={data} />
		  </section>
	  </div>
      </Container>
    </div>
  );
}

