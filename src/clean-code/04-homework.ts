(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
       
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        
        return redFruits.includes(fruit);
        
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitsColors = {
            red:    ['manzana', 'fresa'],
            yellow:  ['piña', 'banana'],
            purple: ['moras', 'uvas']
        } 

        if(!Object.keys(fruitsColors).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsColors[color] 
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if(!isFirstStepWorking) return 'First Step broken.';
        if(!isSecondStepWorking) return 'Second Step broken.';
        if(!isThirdStepWorking) return 'Third Step broken.';
        if(!isFourthStepWorking) return 'Fourth Step broken.';

        return 'Workin Properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




