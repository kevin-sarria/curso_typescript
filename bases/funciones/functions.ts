(
    () => {

        const hero: string = 'Flash';

        function returnName():string {
            return hero;
        }

        const activateBatiSignal = ():string => {
            return 'BatiSeñal Activada!';
        }

        console.log(typeof activateBatiSignal);

        const heroName = returnName();
    }
)();