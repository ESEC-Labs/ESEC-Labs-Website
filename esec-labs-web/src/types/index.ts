export type BlogData = {
	id: string;
	title: string;
	author: string;
	content: string;
	timestamp: string;
	slug: string;
}

export type BlogProps = {
	retrievedData: array; 
}

export type BlogPostPageProps = {
  	params: {
    		slug: string;
  	};
}
