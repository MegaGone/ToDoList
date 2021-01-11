export class ItemModel{

    desc: String;
    completado: boolean;


    constructor(desc: string){
        this.desc = desc;
        this.completado = false;
    }
}