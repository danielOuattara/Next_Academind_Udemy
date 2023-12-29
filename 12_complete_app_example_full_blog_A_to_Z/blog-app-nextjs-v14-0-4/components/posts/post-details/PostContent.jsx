import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import Markdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

    /* -----From docs ----- */
    // code(props) {
    //   const { children, className, node, ...rest } = props;
    //   const match = /language-(\w+)/.exec(className || "");
    //   return match ? (
    //     <SyntaxHighlighter
    //       {...rest}
    //       PreTag="div"
    //       children={String(children).replace(/\n$/, "")}
    //       language={match[1]}
    //       style={atomDark}
    //     />
    //   ) : (
    //     <code {...rest} className={className}>
    //       {children}
    //     </code>
    //   );
    // },

    /* -----From Max ----- */
    code(props) {
      const { className, children } = props;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
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
