"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { User } from "@/types";

const UserContext = createContext<User | null>(null);

export const UserProvider = ({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser: User | null;
}) => {
  return (
    <UserContext.Provider value={initialUser}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
