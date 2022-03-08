export class Apod {
  constructor(data) {
    this.title = data.title
    this.author = data.copyright
    this.desc = data.explanation
    this.img = data.url || data.hdurl
    this.date = data.date
  }
}