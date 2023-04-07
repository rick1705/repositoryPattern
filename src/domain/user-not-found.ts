interface IError {
  code: string;
  message: string;
  messageEs: string;
}

export class UserNotFound extends Error {
  constructor(
    public code: string,
    public message: string,
    public messageEs: string
  ) {
    super(message);
  }

  details(): IError {
    return this;
  }
}
