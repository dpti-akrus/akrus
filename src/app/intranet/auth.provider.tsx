"use client";

import { useEffect } from "react";
import { firebaseAuth } from "../firebase";
import { getAuth } from "firebase/auth";

interface IProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: IProps) {
  useEffect(() => {
    console.log(firebaseAuth.currentUser);
  }, []);

  return children;
}
