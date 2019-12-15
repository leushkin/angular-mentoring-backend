import { Model, ObjectID, Unique, Indexed } from "@tsed/mongoose"
import { Required, Pattern } from "@tsed/common"

@Model({
    name: 'courses'
})
export class CourseModel {
    @ObjectID()
    _id: string

    @Indexed()
    @Unique()
    @Required()
    id: number

    @Pattern(/[a-z]/)
    title: string

    @Pattern(/[a-z]/)
    description: string

    duration: number

    @Pattern(/[a-z]/)
    creationDate: string

    topRated: false

    @Pattern(/[a-z]/)
    author: string
}