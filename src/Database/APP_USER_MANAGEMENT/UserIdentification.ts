import { query } from "../DbClient";

export class UserIdentification {
  static async findByUsername(username: string) {
    const rows = await query(
      `SELECT *
         FROM APP_USER_MANAGER.USER_IDENTIFICATION
        WHERE USERNAME = :username
        ORDER BY UPDATED_AT DESC`,
      { username }
    );
    return rows[0]; 
  }
}