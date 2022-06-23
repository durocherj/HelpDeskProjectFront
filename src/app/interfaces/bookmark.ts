import { Ticket } from "./ticket";
import { User } from "./user";

export interface BookMark {
    bookMarkId?: number;
    ticketId: number;
    userId: number;
   /* ticket: Ticket;
    user: User; */
}