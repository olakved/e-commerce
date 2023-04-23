import { useQuery, useMutation } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";

// const addUser = (user) => {};

export const dbUsersData = () => {
  return useQuery(["users"], () =>
    axios.get("http://localhost:3001/users").then((res) => res.data)
  );
};

// export const addUsersData = () => {
//   const {
//     data: userData,
//     mutate,
//     isLoading: userLoading,
//     isError,
//   } = useMutation(() => axios.post("http://localhost:3001/users", data), {
//     onSuccess(response) {
//       console.log(response);
//     },
//     onError(error) {
//       console.log(error);
//     },
//   });
//   return { mutate, userLoading, isError, userData };
// };

// export const useAddUsersData = () => {
//   return useMutation(addUser);
// };
