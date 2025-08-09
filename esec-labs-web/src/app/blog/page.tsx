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
		  <section className="pt-24 text-center">
		   <h1 className="text-5xl mb-8 font-bold text-black">Learn new skills</h1>

		   <div className="flex justify-center">
			<nav className="flex gap-4">
			  <input
				className="w-96 bg-white text-black shadow-md rounded-lg p-4 border border-gray-200"
				type="text"
				placeholder="Search for blogs..."
			  />
			  {/* Example Button 1 */}
			  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
				Filter
			  </button>
			  {/* Example Button 2 */}
			  <button className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg shadow-md">
				Clear
			  </button>
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

