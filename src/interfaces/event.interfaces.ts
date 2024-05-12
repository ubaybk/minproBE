export interface IEvent {
    id: number
    organizer_id: number
    name: string
    dateStart: Date
    dateEnd: Date
    time: string
    location: string
    desc: string
    categoryName: string
    discount: number
    startAtDiscount: Date
    endAtDiscount: Date
    price: number
    quota: number
}