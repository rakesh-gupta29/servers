/**
 * Define User model
 *
 * @author Rakesh Gupta <rakesh.rkgupta@gmail.com>
 */

export interface Tokens {
  kind: string;
  accessToken: string;
  tokenSecret?: string;
}
export interface IUser {
  email: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;

  facebook: string;
  twitter: string;
  google: string;
  github: string;
  instagram: string;
  linkedin: string;
  tokens: Tokens[];
  steam: string;

  fullname: string;
  gender: string;
  geolocation: string;
  website: string;
  picture: string;
}

export default IUser;
