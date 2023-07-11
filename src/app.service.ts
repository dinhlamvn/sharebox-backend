import { Injectable } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';
import { TiktokService } from './tiktok/tiktok.service';

@Injectable()
export class AppService {
  
  constructor(private readonly firebaseService: FirebaseService, private readonly tiktokService: TiktokService) {}
  
  async getHello(): Promise<string> {
    const topVideos = await this.tiktokService.explore();
    console.log(topVideos);
    return "Hello World!";
  }
}
