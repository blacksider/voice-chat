export enum FromType {
  CURRENT_USER = 'CURRENT_USER',
  RESPONSE = 'RESPONSE',
}

export class ServerMessage {
  From: string;
  FromType: FromType;
  Message: any;
  Time: Date;

  public static ofCurrentUser(message: string): ServerMessage {
    return {
      From: 'me',
      FromType: FromType.CURRENT_USER,
      Message: message,
      Time: new Date()
    };
  }

  public static ofResponse(message: string): ServerMessage {
    return {
      From: 'server',
      FromType: FromType.RESPONSE,
      Message: message,
      Time: new Date()
    };
  }
}
