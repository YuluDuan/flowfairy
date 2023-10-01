import { currentUser } from "@clerk/nextjs";

import SideNav from "@/components/SideNav";
import { fetchUser } from "@/lib/actions/user.actions";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  console.log("user", user);

  // fetch the current user
  const userInfo = await fetchUser(user.id);
  return <SideNav userId={userInfo._id.toString()} />;
}
