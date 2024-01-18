import { api } from "@utils/api";
import { useSession, signIn, signOut } from "next-auth/react";

export const NavBar = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  const currentUser = api.user.getCurrentUser.useQuery();
  const credits = currentUser.data?.credits;

  return (
    <nav>
      <p>Nav Bar</p>
      {isLoggedIn ? (
        <>
          <button onClick={() => signOut()}>Log Out</button>
          <p>Session user: {session.data.user.name}</p>
          <p>Credits: {credits}</p>
        </>
      ) : (
        <button onClick={() => signIn()}>Log In</button>
      )}
    </nav>
  );
};
