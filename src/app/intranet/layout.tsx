"use client";

import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../firebase";

export default function IntranetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname()
  
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) router.push("/intranet/login")
      else setUser(currentUser);

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);
  
  if (loading) return <div>Loading...</div>;

  if(!user && !pathname.includes('login')) return null
  
  return (
    <html>
      <head>
        <title>Intranet</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}