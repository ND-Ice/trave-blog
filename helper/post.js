import { client } from "./client";

const getPostQuery = '*[_type == "posts"]';
const getPosts = () => client.fetch(getPostQuery);

export default { getPosts };
