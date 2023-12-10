export interface Chat {
  id?: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp?: Date;
}
