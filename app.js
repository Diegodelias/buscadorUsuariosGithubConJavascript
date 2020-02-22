const gitHub = new GitHub;
const ui = new UI;

const BuscarUsuario = document.getElementById('buscarUsuario');

BuscarUsuario.addEventListener('keyup',(e)=> {

    const TextoUsuario = e.target.value;

    if( TextoUsuario !== '') {

        gitHub.obtenerUsuario(TextoUsuario)
        .then(data => {
           if(data.perfil.message === 'Not Found'){
                        ui.mostrarAlerta('Usuario no encontrado', 'alert alert-danger');

           }else {
            ui.mostrarPerfil(data.perfil);
            ui.mostrarRepos(data.repos);
         
           };

        })
    } else {

        ui.borrarPerfil();

    }

});