import {React, useState} from "react";

const List = (props) =>{
 
    const {onSelect, onEdit, text} = props;

    // check an item

      const [check, setCheck] = useState(false)

      const onCheck = (id) => {
        setCheck(!check)   
    }
    
    return( 
        <>
        <div className="todo_style">

{/* {
    check ? <li style={{textDecoration: "line-through"}}> {text.name} </li> : <li> {text.name} </li>
} */}

<li style={{textDecoration: check ? "line-through":"none"}}> {text.name} </li>

    {/* {
        check ? <li> {text.name} </li> : <li style={{textDecoration: "line-through"}}> {text.name} </li>
    } */}
        


        <div className="buttons">

                <input className="checkBox" type="checkbox" 
                onClick={() => {
                    onCheck(text.id);
                }}
                
                
                />

                {/* <i  className="fa fa-check-circle" 
                 area-hidden="true"
                 onClick={()=>{onCheck(text.id)}} ></i> */}

                <i  className="fa fa-trash" 
                 area-hidden="true"
                onClick = {() => {
                    onSelect(text.id);
                }}></i>    

                <i 
                className="fa fa-edit" 
                area-hidden="true"
                onClick={() => {
                    onEdit(text.id);
                }}></i>
        </div>
        </div>
        </>
    )
};

export default List;
