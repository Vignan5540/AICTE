import axios from "../Utilities/Axios";

export default {
  login: async (form) => {
    try {
      const response = await axios.post("/user/login", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getMember: async () => {
    try {
      const response = await axios.get("/user/get");
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getComplete: async () => {
    try {
      const response = await axios.get("/project/completed");
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getProject: async () => {
    try {
      const response = await axios.get("/project/get-all-projects");
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getDashbord: async () => {
    try {
      const response = await axios.get("/user/get-dashboard-data");
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getNotification: async (id) => {
    try {
      const response = await axios.get(`/user/${id}/notifications`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getTask: async () => {
    try {
      const response = await axios.get("/task/get-tasks");
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  addMember: async (form) => {
    try {
      const response = await axios.post("/user/register", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  addTask: async (form) => {
    try {
      const response = await axios.post("/task/add-task", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  addProject: async (form) => {
    try {
      const response = await axios.post("/project/add-project", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  editMember: async (form) => {
    try {
      const response = await axios.put(`/user/edit/${form.id}`, form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  editTask: async (form) => {
    try {
      const response = await axios.put(`/task/edit-task`, form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  editProject: async (form) => {
    try {
      const response = await axios.put(`/project/edit/${form.id}`, form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  deleteMember: async (form) => {
    try {
      const response = await axios.delete(`/user/delete/${form}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  deleteNotification: async (form) => {
    try {
      const response = await axios.delete(
        `/user/${form.userId}/notifications/${form.notificationId}`
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  deleteTask: async (form) => {
    try {
      const response = await axios.delete(`/task/delete-task/${form}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  deleteProject: async (form) => {
    try {
      const response = await axios.delete(`/project/delete-project/${form}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },

  forgetPassword: async (form) => {
    try {
      const response = await axios.post("/user/forgot-password", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  markNotificationAsRead: async (form) => {
    try {
      const response = await axios.post(
        "/user/mark-notification-as-read",
        form
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },

  confirmOtp: async (form) => {
    try {
      const response = await axios.post("/user/confirm-otp", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  resetPassword: async (form) => {
    try {
      const response = await axios.post("/user/new-password", form);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};
