import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection, Connection } from "typeorm";

import supplyRoutes from './routes/supply';

class App {
    public app: express.Application;
    public connection: Connection;

    constructor() {}

    async create(){
        try{
            this.connection = await createConnection();
            this.app = express();
            this.setConfigs();
            this.setRoutes();
            // await this.connectDB(this).then((app: App)  => {
            //     app.app = express();
            //     app.config();
            // })
        } catch (err) {
            throw err;
        }
    }

    private setConfigs(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setRoutes(): void{
        this.app.use(supplyRoutes());
    }

    // private async connectDB(app: App) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             app.connection = await createConnection();
    //             resolve(app);
    //         } catch (err){
    //             reject(err.message);
    //         }
    //     })
    // }
}

export default App;