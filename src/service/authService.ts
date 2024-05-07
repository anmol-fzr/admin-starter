import { axiosInst } from "@/config";
import { ILoginReqData, ILoginRes, ILogoutRes } from "@/types";


const AUTH = {
  LOGIN: (data: ILoginReqData) =>
    axiosInst.postForm<ILoginRes>("/dashboard/login/", data),
  LOGOUT: () => axiosInst.post<ILogoutRes>("/dashboard/logout/"),
};

export { AUTH };
