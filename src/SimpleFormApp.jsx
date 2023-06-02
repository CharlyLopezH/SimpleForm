import { useState } from "react";

const App=()=> {
     //Inicialización de los campos y valores en el estado del form
    const formInitialValues = {        
            nombre:'',
            apellido:'',
            email:""
        
    }

    //Declaración del formState; aquí se actualiza con los valores iniciales    
    const [formState, setFormState]=useState(formInitialValues);

    //Destructuración de los valores en el objeto formState
    const {nombre,apellido,email}=formState;

    //
    const onHandlerBtnReset=(e)=>{          
        setFormState(formInitialValues);
    }

    const onHandleInputChange=(e)=>{        
        //console.log(`value: ${e.target.value} - name ${e.target.name}`);
        //console.log(`formState: ${{formState}}`);
        //Asignación dinámica de los valores en las propiedades a los que pertenece el evento en la copia del objeto
         setFormState({
             ...formState, //Actualiza una copia del objeto formState, en la posición del campo valor indicada después de la coma             
             [e.target.name]: e.target.value
           });
    }

    return (
        <>
        <div className="container-fluid">
        <h1>Formulario Simple</h1>
        <hr/>
            <input
            className="form-control mt-2 col-md-6" 
            type="text"            
            name="nombre"        
            value={nombre}           
            placeholder="Nombre"
            // onChange={(e)=>onHandlerNombres(e)}
            onChange={onHandleInputChange}
            />            
            <input
            className="form-control mt-2 col-md-6" 
            type="text"            
            name="apellido"      
            value={apellido}                  
            placeholder="Apellidos"
            onChange={onHandleInputChange}
            />            

            <input
             className="form-control mt-2 col-md-6" 
             type="email"            
             name="email"     
             value={email}           
             placeholder="email"
             onChange={onHandleInputChange}
            />            

            <hr/>
            <button
            className="btn btn-warning"
            onClick={onHandlerBtnReset}            
            >Reset</button>
            </div>
        </>
    )
}
export default App