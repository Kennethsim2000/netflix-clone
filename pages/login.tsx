import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(process.env.GOOGLE_CLIENT_ID);
  console.log(process.env.GOOGLE_CLIENT_SECRET);

  if (session) {
    return (
      <div>
        <p className="text-white">Welcome, {session.user?.email}</p>
        <button className="bg-red-600" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div className="bg-white">
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default Login;
