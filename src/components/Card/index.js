import { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [valor, setValor]= useState(0)

     function Add (){
         setValor(valor + 1)
     }
     function Remove (){
        setValor(valor - 1)
    }
    
    return(
        <div className="Card">
            <div className="card-header"> 
                My First Card
            </div>
            <div className="card-body">
            <Button 
            type="button" 
            class="btn btn-success"
            onClick={Add}            
            >
                Add
            </Button>
            <Button 
            type="button" 
            class="btn btn-danger"
            onClick={Remove}
            >
                Remove
            </Button>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;