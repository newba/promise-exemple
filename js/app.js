document
    .getElementById('aff-dialog')
    .addEventListener('click', () => {
       getNumber('Entrez un nombre')
           .then((value) => {
                alert("Le nombre entré est: " + value);
                return value * 2;
           })
           .then((double) => {
                alert("Le double est:" + double);
           })
       ;
    });