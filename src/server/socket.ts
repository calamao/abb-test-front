import { IPart } from './models/part';
import io from 'socket.io-client';
import { constants } from 'constants/constants';
// import { ChatMessage } from './types';
// import { fromEvent, Observable } from 'rxjs';
export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init(): SocketService {
    this.socket = io(`${constants.baseUrl}`);
    return this;
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }

  public onPartEvent(fn: (part: IPart[]) => void): void {
    this.socket.addEventListener('part', fn);
    // return fromEvent(this.socket, 'message');
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}
