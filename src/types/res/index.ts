interface IRes<Content> {
  status: Status;
  requestedDateTime: string;
  content: Content;
}

export interface Status {
  isSuccess: boolean;
  statusMessage: string;
  code: number;
}

export type { IRes };

export * from "./auth"
