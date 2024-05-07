const env = import.meta.env

const MODE = env.VITE_APP_MODE ?? "DEV";

const isDev = MODE === "DEV";

const envs = {
  MODE,
  isDev,
  SERVER: isDev ? env.VITE_DEV_SERVER_URL : env.VITE_PROD_SERVER_URL,
};

export { envs }
