import dotenv from "dotenv";
dotenv.config();

export class envs{
    static PORT = process.env.PORT;
}