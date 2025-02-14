export interface Process {
    uuid: string,
    priority: number,
    component: React.ComponentType,
    selected: boolean,
    icon: string,
    name: string,
}