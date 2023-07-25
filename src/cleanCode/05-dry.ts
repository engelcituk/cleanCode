
type Sise = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Sise = '',


    ) {
        
    }

    toString(){
        if (this.name.length === 0 ) throw Error('name is empty')
        if (this.price <= 0 ) throw Error('price is zero')
        if (this.size.length <= 0 ) throw Error('size is empty')
        
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(
    ()=>{
        const bluePants = new Product('Blue Large Pants', 5, 'S')
        console.log(bluePants.toString())
    }
)()