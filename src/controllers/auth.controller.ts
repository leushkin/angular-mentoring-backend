import { Controller, Get, Post, Put, Delete, Inject, BodyParams, PathParams } from "@tsed/common";
import { LoginRequestType, LoginResponseType } from "src/types";

@Controller("/auth")
export class Course {
    @Post()
    create(
        @BodyParams() payload: LoginRequestType
    ): LoginResponseType {
        return {
            ...payload,
            isLoggedIn: true,
            token: Math.random().toString()
        }
    }
}