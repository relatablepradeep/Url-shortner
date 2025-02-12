



const sessionidTousermap=new Map();

function setUser(id,user){

    sessionidTousermap.set(id,user)
}


function getUser(id){

    return sessionidTousermap.get(id);
}


module.exports={
    setUser,getUser,
}