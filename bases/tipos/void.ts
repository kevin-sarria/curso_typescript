(
    () => {
        function callBatman():void {
            return;
        }

        const callSuperman = ():void => {
            return;
        }

        const a = callBatman();
        const b = callSuperman();


        console.log(b);
    }
)()