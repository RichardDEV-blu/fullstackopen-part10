import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/queries";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const signIn = async ({ username, password }) => {
    const response = mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
    return response;
  };
  return [signIn, result];
};

export default useSignIn;
