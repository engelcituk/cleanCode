
type Sise = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Sise = '',


    ) {
        
    }
    isProductReady() : boolean  {
        for(const key in this){
            switch ( typeof this[key] ) {
                case 'string':
                    if ( (<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if ( (<number>this[key]) <= 0) throw Error(`${key} is zero`);
                break;
                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true
    }
    toString(){
        if( !this.isProductReady() ) return
        
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(
    ()=>{
        const bluePants = new Product('Blue Large Pants', 5, 'S')
        console.log(bluePants.toString())
    }
)()