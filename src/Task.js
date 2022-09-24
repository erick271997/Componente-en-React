/* La forma mas comun en en los prgramadores de poner estilo
luego se crea un archivo con nom.css como los nombre.js */

import './task.css'


export function TaskCard() {
    return(
        <div className='card'>
            <h1>Mi primera tarea</h1>
            <p>Tarea realizada</p>
        </div>
    )
}














/* export function TaskCard(){
    return  ( 
    <div style={{background: "#202020", color:'#fff',padding: '50px'}}> */{/*  asi se le pasa estilo de css */}
       
     {/*        <h1 style={{fontWeight:'bold'}}>Mi primera tarea</h1>
            <p>Tarea realizada</p>
        </div>
    );

} */}

   /*  return <div>
    <h1>Mi primera tarea</h1>
    <p>Tarea realizada</p>
</div>
Las dos forma se pone para retorna ya si no lo pone asi sale un error
*/

/* Otra forma de meterle estilo
export function TaskCard(){
    const CardStyles = {background: "#202020", color:'#fff',padding: '50px'};
    
    return (
        <div style={CardStyles}>
            <h1 style={titlestyle}></h1>
        </div>
    )
}
}
 */