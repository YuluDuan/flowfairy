"use server";

import { currentUser } from "@clerk/nextjs";

import SideNav from "@/components/SideNav";
import { fetchUser } from "@/lib/actions/user.actions";
import { UserType } from "@/types";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  try {
    const userInfo: UserType = await fetchUser(user.id);
    return <SideNav userId={userInfo._id.toString()} />;
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  return null;
}
