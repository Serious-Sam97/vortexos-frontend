import { FC } from "react";

export interface Program {
    name: string;
    icon: string;
    component: FC<any>;
    componentName: string;
}