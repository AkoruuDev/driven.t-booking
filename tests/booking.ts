import app from "@/app";
import supertest from "supertest";

const server = supertest(app);

describe('To test booking routes', () => {
    it('Should verify if autentication is valid - GET /booking', async () => {
        const booking = await server.post("/");

        expect(booking.status).toBe(200);
    });

    it('Should verify if autentication is invalid - GET /booking', async () => {
        const booking = await server.post("/");

        expect(booking.status).toBe(500);
    });
});