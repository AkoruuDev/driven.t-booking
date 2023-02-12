import { prisma } from "@/config";

export async function findBookingByUser(userId: number) {
    const findBookingByUser = await prisma.booking.findFirst({
        where: {
            userId
        }
    });
    
    return findBookingByUser;
};