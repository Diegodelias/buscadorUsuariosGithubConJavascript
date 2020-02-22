class GitHub {
    constructor(){
        this.client_id = 'bb2be918b9246420c25c';
        this.client_secret = '85a6403578a4b0fe17dfa1d1143f6bc9c9b59ca3';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'

    }


    async obtenerUsuario(usuario){

        const respuestaPerfil = await fetch(`https://api.github.com/users/${usuario}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        
        const respuestaRepos = await fetch(`https://api.github.com/users/${usuario}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const perfil = await  respuestaPerfil.json();
        const repos = await  respuestaRepos.json();



        return {

           perfil,
           repos


        }
}




}