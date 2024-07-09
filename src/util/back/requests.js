import axios from "axios";

const URL = "https://whalefederation.tech:6030/";
// const URL = "http://localhost:6028/";
export const PAYMENT_URL = "https://checkout.whalefederation.tech";
// export const PAYMENT_URL = "https://crypto-payment-psi.vercel.app/";

export const getToken = async ({ login, password }) => {
  const authHeader = "Basic " + btoa(`${login}:${password}`);

  try {
    const response = await axios.post(
      URL + "api/auth/token",
      {},
      {
        headers: {
          Authorization: authHeader,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserInfo = async (token) => {
  try {
    const response = await axios.get(URL + "api/users/by-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTopUsers = async (token) => {
  try {
    const response = await axios.get(URL + "api/users/top ", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTable = async (token, level) => {
  try {
    const response = await axios.patch(
      URL + "api/tables",
      {
        investModelLevel: level,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
