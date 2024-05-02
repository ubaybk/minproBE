export interface IEvent {
    id: number
    organizer_id: number
    name: string
    dateStart: Date
    dateEnd: Date
    time: string
    location: string
    desc: string
    type_id: number
    category_id: number
}