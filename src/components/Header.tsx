import { signIn, signOut, useSession } from "next-auth/react";
import { PrimaryLink } from "./PrimaryLink";
import { Button } from "./Button";
import { useBuyCredits } from "~/hooks/useBuyCredits";

export function Header() {
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;
  return (
    <header className=" container mx-auto  flex items-center justify-between px-8 py-4 dark:bg-gray-800">
      <PrimaryLink href="/">Icon Generator</PrimaryLink>
      <ul>
        <li>
          <PrimaryLink href="/generate">Generate</PrimaryLink>
        </li>
      </ul>
      <ul className="flex gap-4">
        {isLoggedIn && (
          <>
            <li>
              <Button
                onClick={() => {
                  void (async () => {
                    await buyCredits().catch(console.error);
                  })();
                }}
              >
                Buy Credits
              </Button>
            </li>
            <li>
              <Button
                variant={{ color: "secondary" }}
                onClick={() => {
                  void (async () => {
                    await signOut().catch(console.error);
                  })();
                }}
              >
                Logout
              </Button>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Button
              onClick={() => {
                void (async () => {
                  await signIn().catch(console.error);
                })();
              }}
            >
              Login
            </Button>
          </li>
        )}
      </ul>
    </header>
  );
}
