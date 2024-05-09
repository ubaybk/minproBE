import { PrismaClient } from "@prisma/client";
import { IEvent } from "../interfaces/event.interfaces";

const prisma = new PrismaClient

const createEventQuery = async (data: IEvent) => {
    try {
        const { organizer_id, name, dateStart, dateEnd, time, location, desc, categoryName, discount, startAtDiscount, endAtDiscount, price, quota, voucherClaim } = data
        const event = await prisma.event.create({
            data: {
                organizer_id: Number(organizer_id),
                name,
                dateStart,
                dateEnd,
                time,
                location,
                desc,
                categoryName,
                discount,
                startAtDiscount,
                endAtDiscount,
                price,
                quota,
                voucherClaim
            }
        })

        return event
    } catch (err) {
        throw err
    }
}

const getEventQuery = async (filters: {name?: string, location?: string, categoryName?:string}): Promise<IEvent[]> => {
    try {
        const {name, location, categoryName} = filters
        const event = await prisma.event.findMany({
            where: {
                name: {contains:name},
                location: {contains: location},
                categoryName: {contains: categoryName}
            }
        })
            

        return event
    } catch (err) {
        throw err
    }
}

const getIdEventQuery = async (id: number): Promise<IEvent | null>  => {
    try {
        const event = await prisma.event.findUnique({
            where: {
                id
            }
        })
        return event
    } catch (err) {
        throw err
    }
}

const updateEventQuery = async (id: number , filters: {
    name?: string;
    dateStart?: Date;
    dateEnd?: Date;
    time?: Date;
    location?: string;
    desc?: string;
    categoryName?: string;
    discount?: number;
    price?: number;
    quota?: number;
    voucherClaim?: number;
})=> {
    try {
        // Konversi nilai Date menjadi string untuk properti 'time'
        const convertedData = {
            ...filters,
            time: filters.time ? filters.time.toISOString() : undefined
        };

        const event = await prisma.event.update({
            where: { id },
            data: convertedData
        });

        return event
    } catch (err) {
        throw err
    }
}

const deleteEventQuery = async (id: number):Promise <IEvent> => {
    try {
        const event = await prisma.event.delete({
            where: { id }
        })

        return event
    } catch (err) {
        throw err
    }
}

export {
    createEventQuery,
    getEventQuery,
    getIdEventQuery,
    updateEventQuery,
    deleteEventQuery
}

