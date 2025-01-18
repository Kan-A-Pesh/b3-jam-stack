import { paths } from "@/types/api/strapi";
import createClient from "openapi-fetch";

const StrapiClient = createClient<paths>({
  baseUrl: "http://localhost:1337/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
});

export default StrapiClient;
