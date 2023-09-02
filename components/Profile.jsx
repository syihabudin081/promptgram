"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();

  return (
    <section className="w-full">
      <h1 className="head_text">Profile</h1>
      <br />
      <div className="flex items-center gap-4 logo_text">
        <Image
          src={session?.user.image}
          width={50}
          height={50}
          alt="profile image"
          className="rounded-full"
        />
        <div>
          <h1>{session?.user.name}</h1>
          <h2 className="text-sm text-gray-400">{session?.user.email}</h2>
        </div>
      </div>
    </section>
  );
}

export default Profile;
