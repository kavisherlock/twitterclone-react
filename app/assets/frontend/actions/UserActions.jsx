import API from "../API"

export default {
  getAllUsers() {
    API.getAllUsers();
  },

  followUser(user_id) {
    API.followUser(user_id);
  }
}
