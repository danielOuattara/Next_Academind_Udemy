import PostContent from "@/components/posts/post-details/PostContent";
import { getAllPostsSlug, getSinglePostData } from "@/libraries/posts_utility";

export default function PostDetailsPage(context) {
  const postSlug = context.params.postSlug;
  const postData = getSinglePostData(`${postSlug}.md`);
  return <PostContent postData={postData} />;
}
