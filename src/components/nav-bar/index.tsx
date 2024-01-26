import { api } from "@utils/api";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { testStyle } from "./index.css";
import { Heading } from "@components/typography";

export const NavBar = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;

  const currentUser = api.user.getCurrentUser.useQuery();
  const credits = currentUser.data?.credits;

  const checkoutMutation = api.checkout.getCheckoutUrl.useMutation({
    onSuccess: (data, variables, context) => {
      console.log("got the checkout url!");
      console.log(data, variables, context);
      if (data) {
        window.location.href = data;
      }
    },
  });

  const getCheckoutUrl = () =>
    checkoutMutation.mutate({
      productId: "100_credits",
    });

  return (
    <nav>
      <p className={testStyle}>Nav Bar</p>
      <Heading as="h1" style="h1">
        Test Heading
      </Heading>
      {isLoggedIn ? (
        <>
          <button onClick={() => signOut()}>Log Out</button>
          <p>Session user: {session.data.user.name}</p>
          <p>Credits: {credits}</p>
          {/* <Link href="/checkout">Buy 100 Credits</Link> */}
          <button onClick={getCheckoutUrl}>Buy 100 Credits</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Log In</button>
      )}
    </nav>
  );
};
