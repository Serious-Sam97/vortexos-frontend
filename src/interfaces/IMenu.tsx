export interface IMenu {
    name: string;
    icon: string;
    component: React.FC;
    selected: boolean;
}