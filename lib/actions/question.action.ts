"use server";

import { connectToDatabase } from "./mongoose";

export async function createQuestion(params: any) {
  // Create the tags or get them if they already exist
  try {
    connectToDatabase();
  } catch (error) {}
}
