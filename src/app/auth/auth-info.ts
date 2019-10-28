import {AuthAuthority} from './auth-authority';

export class AuthInfo {
  username: string;
  authorities: Array<AuthAuthority>;
}
