import UserTable from "./UserTable";

type Props = {
  searchParams: { sortOrder: string };
};

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortBy={sortOrder} />
    </>
  );
};

export default UsersPage;
