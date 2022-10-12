
    const button =  document.getElementById('button')
    const array1 = [];

        const fx = function() {
            let word = document.getElementById('content').value
            array1.push(word);
            console.log(word);
            document.getElementById('content').value = "";

            if (array1.length == 10){
                document.getElementById('tracker').innerHTML = "";
                document.getElementById('btn').innerHTML = "";
                document.getElementById('richiesta').innerHTML = "";
                let somma = 0;
        
                for (let i = 0; i < array1.length; i++) {
                somma += parseInt(array1[i]) ;
                }
                document.getElementById('somma').innerHTML = somma ;
                }
        }
        button.addEventListener('click' ,fx);
        console.log(array1);

        

       

        



