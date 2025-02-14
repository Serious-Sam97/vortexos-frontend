import { Platform } from "./Platform";

export interface Game {
    id: number,
    title: string,
    platform: Platform,
    startedDate: string,
    completedDate: string|null,
    completed: boolean,
    notes: string|null,
}