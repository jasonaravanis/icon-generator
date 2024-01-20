import { api } from "@utils/api";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const NavBar = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  const currentUser = api.user.getCurrentUser.useQuery();
  const credits = currentUser.data?.credits;

  const checkoutUrl = api.checkout.getCheckoutUrl.useQuery();

  return (
    <nav>
      <p>Nav Bar</p>
      {isLoggedIn ? (
        <>
          <button onClick={() => signOut()}>Log Out</button>
          <p>Session user: {session.data.user.name}</p>
          <p>Credits: {credits}</p>
          {checkoutUrl.data && <Link href={checkoutUrl.data}>Buy Credits</Link>}
        </>
      ) : (
        <button onClick={() => signIn()}>Log In</button>
      )}
    </nav>
  );
};
