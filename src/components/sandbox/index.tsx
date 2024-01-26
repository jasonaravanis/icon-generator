import { api } from "@utils/api";
import { useSession, signIn, signOut } from "next-auth/react";
import { container } from "./index.css";
import { Heading } from "@components/typography";
import { Text } from "@components/typography/text";
// import { Button } from "@components/button";
import { Icon } from "@components/icon";

const Sandbox = () => {
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
      <Heading as="h1" style="h1">
        Heading One
      </Heading>
      <Heading as="h1" style="h2">
        Heading Two
      </Heading>
      <Heading as="h1" style="h3">
        Heading Three
      </Heading>
      <Heading as="h1" style="h4">
        Heading Four
      </Heading>
      <Heading as="h1" style="h5">
        Heading Five
      </Heading>
      <Text>This is some text</Text>
      <Text color="contrast">This is some contrast text</Text>
      {/* <Button label="Generate" /> */}
      <Icon name="airplane_ticket" />
      {isLoggedIn ? (
        <>
          <button onClick={() => signOut()}>Log Out</button>
          <p>Session user: {session.data.user.name}</p>
          <p>Credits: {credits}</p>
          <button onClick={getCheckoutUrl}>Buy 100 Credits</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Log In</button>
      )}
    </nav>
  );
};

export { Sandbox };
