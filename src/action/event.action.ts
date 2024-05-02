import { Event } from "@prisma/client";

import { IEvent } from "../interfaces/event.interfaces";
import { createEventQuery } from "../queries/event.query";


const createEventAction = async (data: IEvent):Promise<Event> => {
    try {
        const event = await createEventQuery(data)

        return event
    } catch (err) {
        throw err
    }
}

export { 
    createEventAction

}

