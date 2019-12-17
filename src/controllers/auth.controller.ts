import { Controller, Get, Post, Put, Delete, Inject, BodyParams, PathParams } from "@tsed/common";
import { LoginRequestType, LoginResponseType } from "src/types";

@Controller("/auth")
export class Course {
    @Post('/login')
    login(
        @BodyParams() payload: LoginRequestType
    ): LoginResponseType {
        return {
            ...payload,
            isLoggedIn: true,
            token: Math.random().toString()
        }
    }

    @Post('/logout')
    logout(
        @BodyParams() payload: LoginRequestType
    ): Omit<LoginResponseType, 'token'> {
        return {
            ...payload,
            isLoggedIn: false,
        }
    }
}