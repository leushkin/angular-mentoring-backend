import { Controller, Get, Post, Put, Delete, Inject, BodyParams, PathParams, QueryParams } from '@tsed/common'
import { generate } from 'shortid'
import { DatabaseService } from '../services/mongoose.service'
import { CourseModel } from '../models/course.model'

/*
 * TODO
 *    - remove _id from response
 *    - get rid of shortid
*/

@Controller("/courses")
export class Course {
    constructor(
        @Inject(DatabaseService) private dbservice: DatabaseService
    ) {}

    @Get('/:id')
    findOne(
        @PathParams('id') id: string
    ): Promise<CourseModel> {
        return this.dbservice.findOne(id)
    }

    @Get()
    findList(
        @QueryParams('start') start: string,
        @QueryParams('count') count: string
    ): Promise<CourseModel[]> {
        return this.dbservice.find(Number(start), Number(count));
    }

    @Post()
    create(
        @BodyParams() payload: Omit<CourseModel, '_id' | 'id'>
    ) {
        return this.dbservice.save({
            ...payload,
            id: generate()
        })
    }

    @Put()
    update(
        @BodyParams() payload: CourseModel
    ): Promise<CourseModel> {
        return this.dbservice.update(payload)
    }

    @Delete('/:id')
    delete(
        @PathParams('id') id: string
    ): Promise<CourseModel> {
        return this.dbservice.delete(id)
    }

}
