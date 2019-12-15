import {GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings} from '@tsed/common'
import * as mongoose from '@tsed/mongoose'
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser'
import * as compress from 'compression';
import * as methodOverride from 'method-override';
import * as cors from 'cors';

const rootDir = __dirname

@ServerSettings({
    mongoose: {
        urls: { // TODO create dev and prod urls
            default: {
                url: process.env.MONGODB_CONNECT_URI
            }
        }
    },
    rootDir,
    acceptMimes: ["application/json"],
    port: 4000
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    public $beforeRoutesInit(): void | Promise<any> {
        this
            .use(GlobalAcceptMimesMiddleware)
            .use(cors())
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }))
    }
}