import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sourav Das",
    email: "sourav@gmail.com",
  },
});

export default UserContext;
