import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function App() {
  return (
    <header>
      <ClerkProvider publishableKey="pk_test_cGxlYXNlZC1hcmFjaG5pZC04OC5jbGVyay5hY2NvdW50cy5kZXYk">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </ClerkProvider>
    </header>
  );
}