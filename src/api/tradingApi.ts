import api from "./axios";

export const getPortfolio = async () => {
  const token = localStorage.getItem("token")
  console.log("Tocken in tradapi:", token)
  const response = await api.get("/trade/portfolio");

  return response.data;
};
