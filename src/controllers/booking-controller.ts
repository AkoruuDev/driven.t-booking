import { Request, Response } from "express";
import { findBookingByUser } from "@/services/booking-service";

export async function getBooking(req: Request, res: Response) {
    const { userId } = req;

    try {
        const booking = await findBookingByUser(userId);
        res.status(200).send(booking)
    } catch (err) {
        res.status(500).send(err.message)
    }
}