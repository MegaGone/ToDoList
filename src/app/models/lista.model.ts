import { ItemModel } from "./lista-item.model";

export class Lista{

    id: number;
    titulo: string;
    start: Date;
    over: Date;
    completada: boolean;
    items: ItemModel[];

    constructor(titulo: string){
        this.titulo = titulo;
        this.start = new Date();
        this.completada = false;
        this.items = [];

        this.id = new Date().getTime();
    }

}