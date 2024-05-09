import { sort } from "fast-sort";
import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  sortBy?: string;
};

const UserTable = async ({ sortBy }: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await response.json();

  let sortedUser: User[];

  switch (sortBy) {
    case "name":
      sortedUser = sort(users).asc(user => user.name);
      break;
    case "email":
      sortedUser = sort(users).asc(user => user.email);
      break;
    default:
      sortedUser = users;
      break;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUser.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
