import { WaitlistUser } from "../model/waitListUser";




export class WaitlistService {
  static async addUser(data: any) {
    const existingUser = await WaitlistUser.findOne({ email: data.email });
    if (existingUser) {
      return { message: "Already submitted" };
    }

    const user = new WaitlistUser(data);
    await user.save();
    return { message: "Successfully submitted", user };
  }
}