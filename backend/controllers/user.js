import { v4 as uuidv4 } from 'uuid';


let users = [
    {
        id:uuidv4(),
        name:"corleone1",
        email:"asfsafsa",
        country:"afasfa",
        contact:"555555",
    },
    {
        id:uuidv4(),
        name:"corleone2",
        email:"asfsafsaasfa",
        country:"afasfaasfsa",
        contact:"55555514141",
    },
]


export const getAllUsers = ((req,res) => {
    res.send(users)
})


export const getSingleUser =  ((req,res) => {
    const {id} = req.params;
    const userId = users.find((a) => a.id === id);
    
    if(!userId)
    {
        res.status(400).send("hata user bulunamadı.")
    }
    res.send(userId)
    
   
})


export const createUser =  ((req,res) => {
    const {name,email,country,contact} = req.body;
    const user = {
        id:uuidv4(),
        name:name,
        email:email,
        country:country,
        contact:contact,
    }
    users.push(user);
    res.send("yeni user oluşturuldu.")
})

export const deleteUser =  ((req,res) => {
    const {id} = req.params;
    const userId = users.find((a) => a.id === (id));
    users = users.filter((a) => a.id !== (id))

    if(!userId)
    {
        res.status(400).send("user bulunamadı")
    }
    res.send(users)
})


export const updateUser =  ((req,res) => {
    const {id} = req.params;
    const user = users.find((a) => a.id === (id));
    const {name,email,country,contact} = req.body;

    
    user.name = name;
    user.email = email;
    user.country = country;
    user.contact = contact;
    if(!users)
        {
            res.status(400).send("user bulunamadı")
        }
    
    res.send(user)

})