(
    ()=> {
        //Aplicando el principio de responsabilidad única
        // Priorizar la composición frene a la herencia
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
            email     : string;
            role      : string;
        }
        
        class User {
            
            public email      : string;
            public lastAccess : Date;
            public role       : string;

            constructor( {email, role } : UserProps ) {
                this.lastAccess = new Date()
                this.email = email
                this.role = role
            }

            checkCredentials(){
                return true
            }
        }

        interface SettingsProps {
            workingDirectory : string; 
            lastOpenFolder   : string;
    
        }


        class Settings {

            public workingDirectory : string;
            public lastOpenFolder   : string;

            constructor({ lastOpenFolder, workingDirectory, }: SettingsProps ){
           
                this.workingDirectory = workingDirectory
                this.lastOpenFolder = lastOpenFolder
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

        class UserSettings {

            public person   : Person;
            public user     : User;
            public settings : Settings;

            constructor({
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthdate,
            }: UserSettingsProps){
                this.person = new Person({name, gender, birthdate})
                this.user = new User({email, role})
                this.settings = new Settings({workingDirectory, lastOpenFolder})
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