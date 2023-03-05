import { Picture } from "./pic";

export class PicService{
    public list: Picture[] = [
        { name: "Pic1", year: 1999, info: "Info1", author: "Author1", url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.neh.gov%2Fsites%2Fdefault%2Ffiles%2F2020-06%2FOpen-Book.jpg&f=1&nofb=1&ipt=fbca7a0f0e9c78ac8a1b6bfc40ee6071d25a541bd2b5de435bbedf80d9e907c4&ipo=images" },
        { name: "Pic2", year: 2005, info: "Info2", author: "Author2", url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F4%2F5%2Fc%2F165919.jpg&f=1&nofb=1&ipt=428c7229d81d25373a93c20fd8b5a51c5bdc5d17b9ab176ae09315bfc59d3c94&ipo=images" },
        { name: "Pic3", year: 2014, info: "Info3", author: "Author3", url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3qyu496o2hwvq.cloudfront.net%2Fwp-content%2Fuploads%2F2020%2F02%2FThe-Open-Road-Edw-V.-Lucas.jpg&f=1&nofb=1&ipt=bf386966ebc949e87ce65a9074b9927772c53b9bb612c5c395b036b51e5c2c6c&ipo=images" },
        { name: "Pic4", year: 2002, info: "Info4", author: "Author4", url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stellabooks.com%2Fstorage%2Fimages%2Fstock%2F1813%2F1813858.JPG&f=1&nofb=1&ipt=3bdc8a14e130966833117e696471344dbef44072c915052f4c907e91f6e51529&ipo=images" }
    ]
}