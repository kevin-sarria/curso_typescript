(() => {

    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo esta salvado!`;


    let myFunction: Function;


    myFunction = addNumbers;
    console.log(myFunction(1, 2));


    myFunction = greet;
    console.log(myFunction('Kevin'));


    myFunction = saveTheWorld;
    console.log(myFunction());



})();