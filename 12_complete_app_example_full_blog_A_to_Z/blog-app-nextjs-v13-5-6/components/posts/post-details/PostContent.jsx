import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import Markdown from "react-markdown";
import Image from "next/image";

export default function PostContent(props) {
  const customRenderers = {
    // img(image) {
    //   console.log("image = ", image);
    //   // 'imag comes from postData.content'
    //   return (
    //     <Image
    //       src={`/images/posts/${props.postData.postSlug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //       className={styles.image}
    //     />
    //   );
    // },

    //----------

    p(paragraph) {
      if (paragraph.node.children[0].tagName === "img") {
        const image = paragraph.node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${props.postData.postSlug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      } else {
        return <p>{paragraph.children}</p>;
      }
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader
        title={props.postData.title}
        image={`/images/posts/${props.postData.postSlug}/${props.postData.image}`}
      />
      <Markdown components={customRenderers}>{props.postData.content}</Markdown>
    </article>
  );
}
