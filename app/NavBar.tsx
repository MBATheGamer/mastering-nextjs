import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-4 space-x-4">
      <Link href="/" className="mr-4">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default NavBar;
