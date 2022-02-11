const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export const getZen = () => fetch('https://api.github.com/zen', requestOptions)
  .then((response) => response.text())
  .catch((error) => console.log('error', error));

export const getUser = () => fetch('https://api.github.com/users/maccrazyman', requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log('error', error));

export const getRepos = () => fetch('https://api.github.com/users/MacCrazyman/repos', requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log('error', error));
