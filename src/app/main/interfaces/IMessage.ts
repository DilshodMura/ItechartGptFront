export interface IMessage {
  id: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
  type: 'user' | 'bot';
}
