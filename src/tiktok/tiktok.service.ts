import { Injectable } from "@nestjs/common";
import { ApiService } from "src/api/api.service";

@Injectable()
export class TiktokService {

    private static readonly categories = [
        {
            name: 'Dance & Music',
            id: 2
        },
        {
            name: 'Sports',
            id: 11
        },
        {
            name: 'Entertainment',
            id: 8
        },
        {
            name: 'Comedy & Drama',
            id: 1
        },
        {
            name: 'Fashon',
            id: 7
        },
        {
            name: 'Lifestyle',
            id: 5
        },
        {
            name: 'Relationship',
            id: 3
        },
        {
            name: 'Society',
            id: 6
        },
        {
            name: 'Informative',
            id: 10
        },
    ];

    constructor(private readonly apiService: ApiService) {}

    async explore() {
        const randomCategoryIndex = Math.floor(Math.random() * TiktokService.categories.length);
        const category = TiktokService.categories[randomCategoryIndex];
        
        const data = await this.apiService.get('https://www.tiktok.com/api/explore/item_list', {
            params: {
                count: 20,
                categoryType: category.id,
                aid: 1988,
                app_language: 'en',
                app_name: 'tiktok_web'
            },
            headers: {
                'Accept': '*/*',
                'Cookie': 'msToken=NLKa58bKNWgPfe0z7X5MdE0GLBxmJxAfdnwh2ce8z8yp7B9whZUGsb5oX3ldG8R-bZM4YA4wQbEdr5yWIpmi-2RgTQmo6iX0f7tlR1_7q-O1Bws3_YcvFb9I0Yp8s0ngY7yQ1lNzpQSlVHCm; ttwid=1%7CND3flbKHv4NC2Q_7PW_7n2yG6ls4cqTd1eczd--ssJA%7C1683194567%7Cbfb84c21e516dbcad4006fe5a80be4ca14448a4fe3f53e5d0c7c450e4e966238'
            }
        });

        const itemList = data?.data?.itemList;
        
        const videos = itemList.map((e: any) => {
            const author = e.author;
            const video = e.video;
            const playCount = e.stats.playCount;
            const desc = e.desc;
            return {
                url: `https://www.tiktok.com/@${author.uniqueId}/video/${video.id}`,
                play_count: playCount,
                desc: desc
            }
        });

        return {
            category_name: category.name,
            videos: videos.filter((e: any) => e.play_count > 1_000_000) 
        };
    }
}