import { Client, Collection } from 'discord.js';
import { log } from './util/Logger';
import { getToken } from './config';


let HecticClient = new Client();



HecticClient.login(getToken());