import { Event } from "@prisma/client";

import { IEvent } from "../interfaces/event.interfaces";
import { createEventQuery, getEventQuery, getIdEventQuery, updateEventQuery, deleteEventQuery} from "../queries/event.query";


const createEventAction = async (data: IEvent, token: any)=> {
    try {
        const event = await createEventQuery(data, token)

        return event
    } catch (err) {
        throw err
    }
}

const getEventAction = async (filters: { name?: string, location?: string, categoryName?: string }): Promise<IEvent[]> => {
    try {
        const event = await getEventQuery(filters)

        return event
    } catch (err) {
        throw err
    }
}

const getIdEventAction = async (id: number): Promise<IEvent | null> => {
    try {
        const eventId = await getIdEventQuery(id)

        return eventId
    } catch (err) {
        throw err
    }
}

const updateEventAction = async (id: number, filters: {
    name?: string
    dateStart?: Date
    dateEnd?: Date
    time?: Date
    location?: string
    desc?: string
    categoryName?: string
    discount?: number
    price?: number
    quota?: number

}) => {
    try {
        const event = await updateEventQuery (id, filters)

        return event
    } catch (err) {
        throw err
    }
}

const deleteEventAction = async (id: number):Promise <IEvent> => {
    try {
        const event = await deleteEventQuery(id)

        return event
    } catch (err) {
        throw err
    }
}

export {
    createEventAction,
    getEventAction,
    getIdEventAction,
    updateEventAction,
    deleteEventAction

}

