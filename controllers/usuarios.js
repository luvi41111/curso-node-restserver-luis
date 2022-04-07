
const {response , request}= require ('express');
;
 const usuariosGet = (req, res = response ) =>{
     const {q, nombre, apikey} = req.query;
    res.json({

       msg: 'get api- controlador',
       q,
       nombre, 
       apikey


    });
  }

  const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({

       msg: 'put api-- controlador',
        id

    });
  }
  const usuariosPost= (req, res= response) => {
    
    const {nombre , edad} = req.body;
    
    
    res.json({

       msg: 'POST api',
        nombre,
        edad

    });
  }
  const usuariosDelete= (req, res = response) => {
    res.json({

       msg: 'put deleteapi'


    });
  }




  module.exports={

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }