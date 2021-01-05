import { Document } from 'mongoose';
export declare type PizzaDocument = Pizza & Document;
export declare class Pizza {
    title: string;
    description: string;
    img: string;
    priceUsd: string;
}
export declare const PizzaSchema: import("mongoose").Schema<any, import("mongoose").Model<any>>;
