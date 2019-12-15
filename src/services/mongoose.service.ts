import { Service, Inject } from '@tsed/common'
import { MongooseModel } from '@tsed/mongoose'
import { CourseModel } from '../models/course.model'

@Service()
export class DatabaseService {
    constructor(
        @Inject(CourseModel) private courses: MongooseModel<CourseModel>
    ) { }

    async save(course: CourseModel): Promise<CourseModel> {
        return await this.courses.insertMany(course)
    }

    async update(course: CourseModel) {
        return await this.courses.updateOne({id: course.id}, course);
    }

    async delete(id: number): Promise<any> {
        return await this.courses.deleteOne({ id })
    }

    async findAll(): Promise<CourseModel[]> {
        return await this.courses.find({})
    }

    async findOne(id: number): Promise<CourseModel> {
        return await this.courses.findOne({ id })
    }
}