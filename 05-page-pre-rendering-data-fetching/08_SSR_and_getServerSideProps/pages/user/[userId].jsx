export default function UserIdPage(props) {
  return <h1> UserId: {props.userId}</h1>;
}

export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: {
      userId: params.userId,
    },
  };
}
