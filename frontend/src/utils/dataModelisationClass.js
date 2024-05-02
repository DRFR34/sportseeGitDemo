/**
 * @description Represents a user model with standardized data fields, for the props of the components.
 * 
 */
export default class UserModelisedData{
    /**
   * @description Creates an instance of UserModelisedData.
   * @param {Object} data - The data object containing user information.
   * @param {number} data.id - The user's ID.
   * @param {number} data.userId - The user's ID.
   * @param {string} data.userInfos.firstName - The user's first name.
   * @param {string} data.userInfos.lastName - The user's last name.
   * @param {number} data.userInfos.age - The user's age.
   * @param {number} data.todayScore - The user's score for today.
   * @param {number} data.score - The user's score.
   * @param {Object} data.keyData - Key data for the user.
   * @param {Array} data.sessions - Array of user sessions.
   * @param {string} data.kind - Kind of user data.
   * @param {Array} data.data - Array of user data.
   */
    constructor(data) {
        this.id = data.id || data.userId;
        this.firstName = data.userInfos?.firstName;
        this.lastName = data.userInfos?.lastName;
        this.age = data.userInfos?.age;
        this.todayScore = data.todayScore || data.score;
        this.keyData = data.keyData;
        this.sessions = data.sessions;
        this.kind = data.kind;
        this.data = data.data;
    }
}
