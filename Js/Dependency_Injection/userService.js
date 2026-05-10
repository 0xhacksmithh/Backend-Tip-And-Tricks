export class UserService {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  registerUser(userName) {
    console.log(`User Registered: ${userName}`);

    this.notificationService.send(`Welcome ${userName}`);
  }
}
