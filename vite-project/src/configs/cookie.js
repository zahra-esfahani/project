const setcookie=(token)=>{
    document.cookie = `Token=${token.token}; max-age=${
        1 * 24 * 60 * 60
      }`;
};

export {setcookie};