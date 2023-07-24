(() => {


    const celsiusTemperature = [33.6, 12.34];
    const ipServer = '123.123.123.123';
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const userEmails = users.map( user => user.email );

    const isJumping = false;
    const isRunning = true;
    const hasItems = true;
    const isLoading = false;


    // tiempo inicial
    const startTime = new Date().getTime();

    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getAreaSquare( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    

})();




