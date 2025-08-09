"use client";

import { BlogData, BlogProps } from "../../types/index"; 
import Link from "next/link";
import type { NextPage } from 'next'; 

const FormatBlogs: NextPage<BlogProps> = ({ retrievedData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {retrievedData.map((item) => (
      <div key={item.id}> 
	      <Link href={`/blog/${item.slug}`}>
		      <div 
			className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100 cursor-pointer">
			    <p className="text-gray-700 text-xl font-bold">{item.title}</p>
			    <p className="text-gray-700 text-md font-semibold">{item.author}</p>
			    <p className="text-gray-700 text-md line-clamp-2 font-semibold">{item.content}</p>
                	    <p className="text-gray-700 text-sm font-semibold">{new Date(item.publishedDate).toLocaleString()}</p> 
		      </div>
	      </Link>
      </div>
      ))}
    </div>
  );
}; 

export default FormatBlogs; 

