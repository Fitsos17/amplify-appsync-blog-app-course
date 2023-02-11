import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

function Profile({ signOut }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const currentUser = await Auth.currentAuthenticatedUser();
    setUser(currentUser);
  }

  if (!user) return null;
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
      <h1 className="font-medium text-gray-500 my-2">
        Username: {user.username}
      </h1>
      <p className="text-sm text-gray-500 mb-6 ">
        Email: {user.attributes.email}
      </p>
      <button
        className="w-full flex justify-center bg-fuchsia-500 py-1 rounded"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default withAuthenticator(Profile);
