import { fetchUser } from "./services.js";
import { withExecutionTime, withLogging } from "./decorators.js";

// Decorator Function
const decoratedFetchUser = withExecutionTime(withLogging(fetchUser));

// Execute
const user = decoratedFetchUser(101);

console.log("\nFinal Result :: ");
console.log(user);
