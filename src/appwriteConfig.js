import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject("YOUR_PROJECT_ID"); // 🔑 Replace with your actual Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { client };
