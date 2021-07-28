import getCookie from './cookies';

const userVerify = async () => {
    let promise = await fetch('https://phonesandphones.herokuapp.com/user/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
        },
    })
    let res = await promise.json();
    return res;
};

export {
    userVerify
}