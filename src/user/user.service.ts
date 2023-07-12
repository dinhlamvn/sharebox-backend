import { Injectable } from "@nestjs/common";
import { Common } from "src/common/common";
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { FirebaseService } from "src/firebase/firebase.service";

@Injectable()
export class UserService {

    constructor(private readonly firebaseService: FirebaseService) {}

    async createUser(createUserDto: CreateUserDto) {
        console.log(createUserDto);
        console.log(Common.isProduction());
        return this.firebaseService.pushInChild('users', createUserDto.user_id, {
            avatar: createUserDto.avatar,
            level: 0,
            drama: 0,
            name: createUserDto.name,
            user_id: createUserDto.user_id,
            join_date: Common.nowInMillis()
        });
    }
}