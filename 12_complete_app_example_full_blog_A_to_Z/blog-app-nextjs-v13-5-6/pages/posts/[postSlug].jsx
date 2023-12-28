import PostContent from "@/components/posts/post-details/PostContent";
import { getAllPostsSlug, getSinglePostData } from "@/libraries/posts_utility";

//--------------------------------------------------------------
export default function PostDetailsPage(props) {
  return <PostContent postData={props.postData} />;
}

//--------------------------------------------------------------
export function getStaticProps(context) {
  const postSlug = context.params.postSlug;
  const postData = getSinglePostData(`${postSlug}.md`);
  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
}
//--------------------------------------------------------------
export function getStaticPaths() {
  const paths = getAllPostsSlug().map((postSlug) => ({
    params: { postSlug },
  }));
  return {
    paths,
    fallback: false,
  };
}
