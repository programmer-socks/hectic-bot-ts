import chalk from 'chalk';

/**
 * Logs a message.
 * @param message The message
 */
export function log(message: string): void {
    console.log(chalk`{green} ${message}`)
}