const getNumber = function getNumber (message) {
    return new Promise((resolve, reject) => {
        debugger;
        /* 1. Afficher la boîte de dialogue */
        document.getElementById('my-dialog').classList.add('is-active');

        /* 2. Lier l'événement click au bouton Save Changes */
        document
            .getElementById('save')
            .addEventListener('click', () => {
                debugger;
                const textValue = document.getElementById('input').value;
                document
                    .getElementById('my-dialog')
                    .classList
                    .remove('is-active');
                resolve(textValue);
            })
    });
};

