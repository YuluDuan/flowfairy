"use server"

import User from "../../models/user";
import { connectToDB } from "../db";

export async function fetchUser(userId: string) {
  try {
    connectToDB();
    const user = await User.findOne({ user_id: userId });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}