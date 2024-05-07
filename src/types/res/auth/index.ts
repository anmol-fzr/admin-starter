import { IRes } from "..";

interface Content {
  user: boolean;
  username: string;
  email: string;
  token: string;
}

type ILoginRes = IRes<Content>;
type ILogoutRes = IRes<null>;

export type { ILoginRes, ILogoutRes };
