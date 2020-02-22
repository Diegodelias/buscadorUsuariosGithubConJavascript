class UI {
    constructor(){
        this.perfil = document.getElementById('perfil');
    }

    mostrarPerfil(usuario) {

        this.perfil.innerHTML = `
        <div class="card card-body mb-3">

            <div class="row">
               
                
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${usuario.avatar_url}">
                <a href="${usuario.html_url}" target="_blank" class="btn btn.primary btn-block"> Ver Perfil
                </a>
            </div>

            <div class="col-md-9">
            <span class="badge badge-primary">Repositorios públicos : ${usuario.public_repos}</span>
            <span class="badge badge-secondary">Gists públicos : ${usuario.public_gists}</span>
            <span class="badge badge-success">Seguidores : ${usuario.followers}</span>
            <span class="badge badge-info">Siguiendo : ${usuario.following}</span>
            <br><br>
            <ul  class="list-group">
                <li class="list-group-item">Trabaja en:${usuario.company} </li>
                <li class="list-group-item">Website/Blog:${usuario.blog} </li>
                <li class="list-group-item">Lugar:${usuario.location} </li>
                <li class="list-group-item">Miembro desde:${usuario.created_at} </li>

            </ul>

            </div>
            
            </div>

        </div>
        <h3 class="page-heading mb-3">Ultimos repos</h3>
        <div id="repos"></div>
        `;
    }

    mostrarRepos(repos) {
        let output = '';
        repos.forEach(function(repo){

            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">

                    <a href="${repo.html_url}" target="_blank">${repo.name}
                    </a>
                
                    </div>

                    <div class="col-md-6">

                    <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                     <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                     <span class="badge badge-success">Forks : ${repo.forms_count}</span>
                    
                    </div>
                </div>
            </div>
            
            `

        });

       document.getElementById('repos').innerHTML = output;
    }


    mostrarAlerta(mensaje, clase){
        this.borrarMensajeAlerta();
        //crear div
        const div = document.createElement('div');
        //agregar clase al div
        div.className = clase;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //obtener parent

        const container = document.querySelector('.busquedaContainer');

        // obtener caja busqueda

        const busqueda = document.querySelector('.buscar');

        //Insertar alerta

        container.insertBefore(div,busqueda)


        setTimeout(() => {
            this.borrarMensajeAlerta()
        },3000);
    }


    borrarMensajeAlerta(){

        const AlertaActual = document.querySelector('.alert');

        if(AlertaActual){
            AlertaActual.remove()

        }
    }
    borrarPerfil(){
        this.perfil.innerHTML = ''
    }



}