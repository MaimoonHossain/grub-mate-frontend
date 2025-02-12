const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API_PATHS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    SIGNUP: `${API_BASE_URL}/auth/signup`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    USER_PROFILE: `${API_BASE_URL}/auth/profile`,
  },
  FOOD: {
    GET_ALL: `${API_BASE_URL}/food`,
    GET_BY_ID: (id) => `${API_BASE_URL}/food/${id}`,
    CREATE: `${API_BASE_URL}/food/create`,
  },
  ORDERS: {
    GET_ALL: `${API_BASE_URL}/orders`,
    CREATE: `${API_BASE_URL}/orders/create`,
    GET_BY_ID: (id) => `${API_BASE_URL}/orders/${id}`,
  },
};

export default API_PATHS;
