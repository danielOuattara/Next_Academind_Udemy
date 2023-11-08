export default function UserProfile(props) {
  return <h1>{props.userName}</h1>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  return {
    props: {
      userName: "John Doe",
    },
  };
}
