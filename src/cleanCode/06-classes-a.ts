(
    ()=> {
         type Gender = 'M' | 'F'

         class Person {
          

            constructor( 
                public name: string,
                public gender: Gender,
                public birtdate : Date,
            ) {
        
            }
        }

        const newPerson = new Person('eCituk', 'M', new Date('1991-11-15') )
        console.log(newPerson)
    }
)()