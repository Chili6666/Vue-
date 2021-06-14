//Axios konfiguration

import axios, { AxiosInstance } from "axios";
import { baseUrl, requestTimeOut } from "@/env";

export const axioInstance: Readonly<AxiosInstance> = axios.create({
  baseURL: baseUrl,
  timeout: requestTimeOut,
  headers: {
    "Content-type": "application/json"
  }
});


export default axios.create({
  baseURL: baseUrl,
  timeout: requestTimeOut,
  headers: {
    "Content-type": "application/json"
  }
});

