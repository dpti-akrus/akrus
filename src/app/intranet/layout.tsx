"use client";
import { firebaseAuth } from "../firebase";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

export default function IntranetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    console.log(firebaseAuth.currentUser);
  }, []);

  return (
    <html>
      <head>
        <title>Intranet</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
