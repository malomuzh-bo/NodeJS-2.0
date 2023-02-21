export class ResumeTemplate{
    name: string = "";
    number: number = 0;
    email: string = "";
    city: string = "";
    experience: string = "";
    skills: string = "";
    picPath: string = "";

    constructor(n: string, number: number, em: string, c: string, exp: string, sk: string, pic: string){
        this.name = n;
        this.number = number;
        this.email = em;
        this.city = c;
        this.experience = exp;
        this.skills = sk;
        this.picPath = pic;
    }
}