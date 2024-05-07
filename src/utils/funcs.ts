import { envs } from ".";
import API from "@/service"
import toast from "react-hot-toast";
import { StoreApi } from "zustand";
import { ObjectSchema } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuthStore } from "@/store";

function registerStore(store: StoreApi<any>, name: string) {
  if (typeof window !== "undefined" && envs.isDev) {
    const connection = (window as any)?.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name,
    });
    connection?.init(store.getState());
    store.subscribe((newState) => connection?.send(name, newState));
  }
}

const resolver = (schm: ObjectSchema<any>) =>
  yupResolver(schm, {
    stripUnknown: true,
  });

const resetCreds = useAuthStore.getState().resetCreds

const logout = () => {
  const id = toast.loading("Log out ...");
  API.AUTH.LOGOUT()
    .then((res) => {
      toast.success(res.data.status.statusMessage, { id });
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data.status.statusMessage, { id });
    });
  resetCreds();
};

export { registerStore, resolver, logout }
