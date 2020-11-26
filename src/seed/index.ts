import { getRepository, getManager, createConnection, Connection } from "typeorm";

import { Supply } from '../entity/Supply';
import { supplySeed } from './Supply';

async function seedData(){
    try {
        const connection: Connection = await createConnection();

        // await connection.Manager.save(supplySeed);

        const supplyRepository = getRepository(Supply);

        await supplyRepository.save(supplySeed);

        console.log("supply data successfully added");

    } catch (error){
        console.log(error.message)
    }
}

seedData();