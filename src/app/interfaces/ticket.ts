export interface Ticket {
    ticketId: number;
    title: string;
    requestedBy:string;
    contents: string;
    resolution: string;
    resolvedBy:string;
    closed: boolean;
}
