export function fetchUser(userId) {
  console.log(`Fetch user ${userId} from database ....`);

  return {
    id: userId,
    name: "Satyabrata",
  };
}
