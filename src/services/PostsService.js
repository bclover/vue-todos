import Vue from 'vue';
import axios from 'axios';

// define what the error message will look like
const errorOptions = {
  position: 'top-center',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false,
};

// error interceptor
const errorInterceptor = (error) => {
  Vue.$toast.error(`${error}`, errorOptions);
};

// success interceptor
const successInterceptor = response => response;


// axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
});

// assign interceptors
api.interceptors.response.use(successInterceptor, errorInterceptor);


// Valid API endpoint (use this to load valid data)
const postsUrl = '/posts';

// Invalid API endpoint (use this to simulate an error)
// const postsUrl = '/badURL';

// api methods
export default {
  getPosts() {
    return api.get(postsUrl);
  },
};
