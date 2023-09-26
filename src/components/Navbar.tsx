import { currentUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import type { User } from "@clerk/nextjs/api";

const Navbar = async () => {
  const user: User | null = await currentUser();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>

        <li>
          <Link href="/sign-up">Sign Up</Link>
        </li>

        {user ? (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>

            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export { Navbar };
