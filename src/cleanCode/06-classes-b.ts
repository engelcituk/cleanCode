(
    ()=> {
         type Gender = 'M' | 'F'

         interface PersonProps {
            birthdate : Date;
            gender   : Gender;
            name     : string;
         }

         class Person {

            public birtdate : Date;
            public gender   : Gender;
            public name     : string;

            constructor({ name, gender, birthdate}: PersonProps) {
                this.name     = name;
                this.gender   = gender;
                this.birtdate = birthdate;
            }
        }

        interface UserProps {
            birthdate : Date;
            email     : string;
            gender    : Gender;
            name      : string;
            role      : string;
        }
        
        class User extends Person {
            
            public email      : string;
            public role       : string;
            public lastAccess : Date;

            constructor( {email, role, name, gender, birthdate } : UserProps ) {
                super({ birthdate, name, gender})
                this.lastAccess = new Date()
                this.email = email
                this.role = role


            }

            checkCredentials(){
                return true
            }
        }

        interface UserSettingsProps {
            workingDirectory : string; 
            lastOpenFolder   : string;
            email            : string;
            role             : string;
            name             : string;
            gender           : Gender;
            birthdate        : Date;
        }


        class UserSettings extends User {

            public workingDirectory : string;
            public lastOpenFolder   : string;

            constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory, }: UserSettingsProps ){
                super({email, role, name, gender, birthdate})
                this.workingDirectory = workingDirectory
                this.lastOpenFolder = lastOpenFolder
            }
        }
        
        const userSettings = new UserSettings({
            workingDirectory: '/user/home',
            lastOpenFolder: '/user/imgs',
            email: 'myemail@mail.com',
            role: 'Admin',
            name: 'eCituk',
            gender: 'M',
            birthdate: new Date('1991-11-15'),
        })

        console.log({userSettings})

        
    }
)()