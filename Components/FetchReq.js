const ipServerLocal = "192.168.88.49";
function jsonReq (donné,navigation,screen,route){
    return fetch('http://'+ipServerLocal+'/'+route, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donné),
                })
            .then(response => response.json())
            .then(data => {
                alert(data);
                navigation.navigate(screen)
            })
            .catch((error) => {
                alert("Erreur on a pas pu joindre le serveur,votre réservation n'a pas pu être envoyé !!")
                navigation.navigate(screen)
            })
        ;
    }

export default jsonReq