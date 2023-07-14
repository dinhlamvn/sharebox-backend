import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { Common } from "src/common/common";
import { FirebaseService } from "src/firebase/firebase.service";
import { TiktokService } from "src/tiktok/tiktok.service";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TasksService {

    private readonly logger = new Logger(TasksService.name);

    constructor(
        private readonly firebaseService: FirebaseService,
        private readonly tiktokService: TiktokService
    ) {}

    @Cron(Common.isProduction() ? CronExpression.EVERY_10_MINUTES : CronExpression.EVERY_30_MINUTES)
    async handleCron() {
        this.logger.debug('Cron collect top videos start...');
        
        const topVideo = await this.tiktokService.explore();
    
        for (let i = 0; i < topVideo.videos.length; ++i) {
            const video = topVideo.videos[i];
            const uuid = `${uuidv4()}`;
            const data = {
                share_data: JSON.stringify({
                    type: 'url',
                    data: video.url
                }),
                share_date: +(new Date()),
                share_id: uuid,
                share_note: `#${topVideo.category_name}\n\n${video.desc}`,
                share_user_id: 'tiktok-trending-videos-collector'
            };
      
            console.log(data);

            await this.firebaseService.pushInChild('shares', uuid, data);
        }

        this.logger.debug('Cron collect top videos stop...');
    }
}