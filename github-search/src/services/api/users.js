import config from './config'

 function getUsers(nameUser) {
   const url = `/users/${nameUser}`;
    return config.get(url);
}

function getRepos (nameUser) {
    const url = `/users/${nameUser}/repos`;
    return config.get(url)
}

export { getUsers, getRepos}