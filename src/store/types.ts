type IStatus = "create" | "read" | "update" | "delete";

type IOption<V = string, L = string> = {
  label: L;
  value: V;
};

type ICreds = {
  token: string | null;
  isLogin: boolean;
  username: string | null;
  email: string | null;
};

type IAuthStoreData = {
  creds: ICreds;
};

type IAuthStoreActions = {
  resetCreds: () => void;
  updateCreds: (creds: Partial<ICreds>) => void;
};


type IAuthStore = IAuthStoreData & IAuthStoreActions;

export type {
  ICreds, IAuthStore, IStatus, IOption
};
