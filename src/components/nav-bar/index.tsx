import { api } from "@utils/api";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const NavBar = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  const currentUser = api.user.getCurrentUser.useQuery();
  const credits = currentUser.data?.credits;

  const buyCredits = async () => {
    await fetch("/api/stripe", {
      method: "POST",
      redirect: "follow", // does not work, apparantly fetch won't redirect to stripe checkout page. But doing the form submission method below does work.
    });
  };

  return (
    <nav>
      <p>Nav Bar</p>
      {isLoggedIn ? (
        <>
          <button onClick={() => signOut()}>Log Out</button>
          <p>Session user: {session.data.user.name}</p>
          <p>Credits: {credits}</p>
          <button onClick={() => buyCredits()}>Buy Credits</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Log In</button>
      )}
      <form method="POST" action="/api/stripe">
        <button type="submit">Submit</button>
      </form>
    </nav>
  );
};
