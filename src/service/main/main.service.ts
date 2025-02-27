import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { BaileysService } from '../baileys/baileys.service';
import { ParamSendMessage, ParamSendStatus } from './main.type';

@Injectable()
export class MainService {
  constructor(private baileysService: BaileysService) {}

  getQr(id: string) {
    return { qrcode: this.baileysService.getQr(id) };
  }

  getContact(id: string) {
    return this.baileysService.getContact(id);
  }

  getGroup(id: string) {
    return this.baileysService.getGroup(id);
  }

  async connect() {
    const id = uuidv4();
    await this.baileysService.connect(id);

    return { id };
  }

  async disconnect(id: string) {
    await this.baileysService.disconnect(id);
  }

  sendMessage(id: string, param: ParamSendMessage) {
    return this.baileysService.sendMessage(id, param);
  }

  sendStatus(id: string, param: ParamSendStatus) {
    return this.baileysService.sendStatus(id, param);
  }
}
