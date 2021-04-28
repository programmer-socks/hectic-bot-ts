import dotenv from 'dotenv';

dotenv.config();

/**
 * @description Get the discord bot token
 */
export function getToken() {
    return process.env.token;
}