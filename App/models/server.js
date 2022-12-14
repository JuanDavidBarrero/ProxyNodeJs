import express from 'express'
import cors from 'cors'

import userRouter from '../routes/user.js';

export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        this.middlewares();

        this.routes();
    }


    middlewares() {

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.userPath, userRouter);


    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run on the port ${this.port}`)
        });
    }

}

