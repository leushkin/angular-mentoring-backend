import { Service, Inject } from '@tsed/common'
import { MongooseModel } from '@tsed/mongoose'
import { CourseModel } from '../models/course.model'

@Service()
export class DatabaseService {
    constructor(
        @Inject(CourseModel) private courses: MongooseModel<CourseModel>
    ) { }

    async save(course: Omit<CourseModel, '_id'>): Promise<CourseModel> {
        return await this.courses.insertMany(course) // TODO there should be insert method.
    }

    async update(course: CourseModel) {
        return await this.courses.updateOne({id: course.id}, course);
    }

    async delete(id: string): Promise<any> {
        return await this.courses.deleteOne({ id })
    }

    async find(start: number, count: number): Promise<CourseModel[]> {
        return await this.courses.find({}).skip(start).limit(count)
    }

    async findOne(id: string): Promise<CourseModel> {
        return await this.courses.findOne({ id })
    }
}