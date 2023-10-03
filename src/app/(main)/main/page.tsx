"use server";

import { currentUser } from "@clerk/nextjs";

import SideNav from "@/components/SideNav";
import { fetchUser } from "@/lib/actions/user.actions";
import { UserType } from "@/types";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  // fetch the current user
  const userInfo: UserType = await fetchUser(user.id);

  if (!userInfo) return null;
  return <SideNav userId={userInfo._id.toString()} />;
}
