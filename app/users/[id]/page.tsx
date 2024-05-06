type Props = {
  params: { id: number };
};

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>User Detail Page {id}</div>;
};

export default UserDetailPage;
