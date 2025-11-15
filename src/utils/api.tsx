import axios from "axios";
// import Cookies from "js-cookie";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
//
// apiInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("bearerToken");
//     if (token) config.headers["Authorization"] = `Bearer ${token}`;
//
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
//
// apiInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//
//       const refreshToken = Cookies.get("refreshToken");
//
//       if (!refreshToken) {
//         Cookies.remove("bearerToken");
//         Cookies.remove("refreshToken");
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }
//
//       try {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/lykeion/refresh-token`,
//           {},
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//               Authorization: `Bearer ${refreshToken}`,
//             },
//           },
//         );
//
//         const newToken = response.data.data.access_token;
//         const refresh_token = response.data.data.refresh_token;
//         Cookies.set("bearerToken", newToken);
//         Cookies.set("refreshToken", refresh_token, { expires: 30 });
//         apiInstance.defaults.headers.common["Authorization"] =
//           `Bearer ${newToken}`;
//         originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
//
//         return apiInstance(originalRequest);
//       } catch (refreshError) {
//         Cookies.remove("bearerToken");
//         Cookies.remove("refreshToken");
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }
//     if (error.response && error.response.data && error.response.data.message) {
//       error.message = error.response.data.message;
//     }
//     return Promise.reject(error);
//   },
// );
//
// // Setting Bearer token
// export const setBearerToken = (token: string) => {
//   Cookies.set("bearerToken", token);
// };

export default apiInstance;
