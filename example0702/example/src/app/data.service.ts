export class DataService{
    private data: string[] = ["Phone1", "Phone2", "Phone3"];

    getData(): string[]{
        return this.data;
    }
    addData(name: string){
        this.data.push(name);
    }
}