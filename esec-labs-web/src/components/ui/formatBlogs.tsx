"use client";

import { BlogData } from "../../types/index";

type Props = {
  retrievedData: BlogData[];
};

export default function FormatBlogs({ retrievedData }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-gray-100">
        {retrievedData.map((item) => (
          <div key={item.id}>
            <p className="text-gray-700 text-lg font-semibold">{item.id}</p>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.content}</p>
            <p>{new Date(item.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

