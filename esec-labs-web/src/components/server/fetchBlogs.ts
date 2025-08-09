import { BlogData } from "@/types";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function fetchBlogs(): Promise<BlogData[]>{
 const q = query(collection(db, "blogData"), orderBy("timestamp", "desc"));
 const querySnapshot = await getDocs(q);

 const fetchedBlogData: BlogData[] = querySnapshot.docs.map((doc) => {
	const data = doc.data();
	return {
		id: doc.id, 
		title: data.title,
		author: data.author,
		content: data.content, 
		timestamp: data.timestamp.toDate().toISOString(),

	};	
 });
	return fetchedBlogData;
}
