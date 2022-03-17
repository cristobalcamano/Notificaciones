
export class Paginador{
    constructor(
        public number:number,
        public size :number,
        public totalPages:number,
        public totalElements:number,
        public origen:string,
        public paginaActual:number
        
    ){}
    
}