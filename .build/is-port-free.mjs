import { createServer } from 'node:net';

/**
 * Check if a port is free on localhost.
 * @param {number} port - The port number to check.
 * @returns {Promise<boolean>} - Resolves to `true` if the port is free, otherwise `false`.
 */
export const isPortFree = async (port) => {
    return new Promise((resolve) => {
        const server = createServer();

        server.once('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(false); // Port is in use
            } else {
                resolve(false); // Some other error occurred
            }
        });
        server.once('listening', () => {
            server.close(() => {
                resolve(true); // Port is free
            });
        });
        server.listen(port, '127.0.0.1');
    });
}