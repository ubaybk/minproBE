import { PrismaClient } from "@prisma/client";
import { IEvent } from "../interfaces/event.interfaces";

const prisma = new PrismaClient

const createEventQuery = async (data: IEvent) => {
    try {
        const { organizer_id, name, dateStart, dateEnd, time, location, desc, type_id, category_id } = data
        const event = await prisma.event.create({
            data: {
                organizer_id: Number(organizer_id),
                name,
                dateStart,
                dateEnd,
                time,
                location,
                desc,
                type_id: Number(type_id),
                category_id: Number(category_id)
            }
        })

        return event
    } catch (err) {
        throw err
    }
}

export {
    createEventQuery
}