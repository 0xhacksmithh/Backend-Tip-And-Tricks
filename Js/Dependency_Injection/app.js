import { EmailService } from "./emailService.js";
import { SmsService } from "./smsService.js";
import { UserService } from "./userService.js";

// Inject Email Service
const emailService = new EmailService();

const emailUserService = new UserService(emailService);

emailUserService.registerUser("Satyabrata");

// Inject SMS Service
const smsService = new SmsService();
const smsUserService = new UserService(smsService);

smsUserService.registerUser("Rahul");
