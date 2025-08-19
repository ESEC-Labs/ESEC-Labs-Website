import Container from "../../../components/ui/Container";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "../../../components/server/fetchOneBlog";
import { BlogPostPageProps } from "../../../types/index";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


export default async function BlogPage({ params }: BlogPostPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound(); 
  }

  return (
    <Container>
      <article className="py-12 text-black text-center bg-gray-100 rounded">
        {/* Header Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <p className="text-lg text-gray-500">By {blog.author}</p>
        </section>

        {/* Markdown Content Section */}
        <div className="prose max-w-none prose-lg mx-auto text-left p-6">
          <Markdown rehypePlugins={[rehypeRaw]}>{blog.content}</Markdown>
        </div>
      </article>
    </Container>
  );
}
