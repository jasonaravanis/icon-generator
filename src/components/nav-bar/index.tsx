import { useSession, signIn, signOut } from "next-auth/react";

export const NavBar = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <nav>
      <p>Nav Bar</p>
      {isLoggedIn ? (
        <>
          <button onClick={() => signOut()}>Log Out</button>
          <p>Current user: {session.data.user.name}</p>
        </>
      ) : (
        <button onClick={() => signIn()}>Log In</button>
      )}
    </nav>
  );
};
