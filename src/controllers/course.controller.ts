import { Controller, Get, Post, Put, Delete, Inject, BodyParams, PathParams } from "@tsed/common";
import { DatabaseService } from '../services/mongoose.service';
import { CourseModel } from '../models/course.model';

@Controller("/courses")
export class Course {
    constructor(
        @Inject(DatabaseService) private dbservice: DatabaseService
    ) {}

    @Get('/:id')
    findOne(
        @PathParams('id') id: number
    ): Promise<CourseModel> {
        return this.dbservice.findOne(id)
    }

    @Get()
    findList(): Promise<CourseModel[]> {
        return this.dbservice.findAll();
    }

    @Post()
    create(
        @BodyParams() payload: CourseModel
    ): Promise<CourseModel> {
        return this.dbservice.save(payload)
    }

    @Put()
    update(
        @BodyParams() payload: CourseModel
    ): Promise<CourseModel> {
        return this.dbservice.update(payload)
    }

    @Delete('/:id')
    delete(
        @PathParams('id') id: number
    ): Promise<CourseModel> {
        return this.dbservice.delete(id)
    }

}