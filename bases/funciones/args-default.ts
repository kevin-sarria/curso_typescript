(() => {

    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {
        
        return upper ? `${firstName} ${lastName || 'no lastname'}`.toUpperCase() : `${firstName} ${lastName || 'no lastname'}`

    }

    const name = fullName( 'Tony', '',true );

    console.log({ name });

})();