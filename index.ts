import { Client, Collection } from 'discord.js';
import { log } from './util/Logger';
import dotenv from 'dotenv';
dotenv.config();


let HecticClient = new Client();



HecticClient.login(process.env.TOKEN);
