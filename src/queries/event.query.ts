import { PrismaClient } from "@prisma/client";
import { IEvent } from "../interfaces/event.interfaces";
import { isNumberObject } from "util/types";

const prisma = new PrismaClient

const createEventQuery = async (data: IEvent, token: any ) => {
    try {

        const userId = token.userId;

        const {  name, dateStart, dateEnd, time, location, desc, categoryName, discount, startAtDiscount, endAtDiscount, price, quota } = data
       
        
       
        const event = await prisma.event.create({
            data: {
                organizer_id: userId,
                name,
                dateStart: new Date(dateStart),
                dateEnd: new Date(dateEnd),
                time,
                location,
                desc,
                categoryName,
                discount ,
                startAtDiscount: new Date(startAtDiscount),
                endAtDiscount:  new Date(endAtDiscount),
                price,
                quota,
                
            }
        })

        return event
    } catch (err) {
        throw err
    }
}

const getEventQuery = async (filters: {
    name?: string 
    location?: string
    categoryName?:string 
    // page?: number
    // pageSize?: number
}): Promise<IEvent[]> => {
    try {
        const {name, location, categoryName} = filters
        // const skipPage = Number(page) > 1? (Number(page) - 1) * Number(pageSize) : 0
        const event = await prisma.event.findMany({
            // skip: skipPage,
            // take: Number(pageSize),
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

