export default class Soda {
    constructor(code, price, imgURL = '/assets/img/SodaRed.png') {
        this.code = code
        this.price = price
        this.imgURL = imgURL
    }






    get Template() {
        return /*html*/`
        <div class="card p-2 value">
            ${this.title}
        </div>
        `
    }
}
