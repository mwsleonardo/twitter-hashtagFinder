import axios from "axios";

const api = axios.create({
  baseURL: "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=3&view=Grid%20view",
});

export default api;