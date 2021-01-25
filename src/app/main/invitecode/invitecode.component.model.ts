export interface InviteCode {
  _id: string;
  passCode: string;
  expiration: string;
  created: Date;
  limitNumber: number;
}
