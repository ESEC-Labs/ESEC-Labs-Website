import { BlogData } from "@/types";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  const docRef = doc(db, "blogData", slug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      title: data.title,
      author: data.author,
      content: data.content,
      timestamp: data.timestamp.toDate().toISOString(),
    };
  } else {
    return null;
  }
}
