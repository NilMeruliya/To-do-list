import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import List from "./Lists";

// get data from localStorage
const getLocalItem = () => {
 let item = localStorage.getItem("info");
//  console.log(item);

 if(item){
     return JSON.parse(localStorage.getItem("info"))
 }else {
     return [];
 }
}
 
const App = () => {

    // get the data from input
    const [text, changeTxt] = useState(""); 

    // add button (submit button)
    const [ntext, newText] = useState(getLocalItem([]));

    // for toggle Button
    const [toggle, setToggle] = useState(true)

    // to get the id of the button from re-written list
    const [isEdit, setIsEdit] = useState(null)

    // hover
    const [remove, setRemove] = useState("Check List")

    // check an item

    // const [check, setCheck] = useState(true)

    //    const onCheck = (id) =>{
    //     // console.log(id); 
    //     // setCheck(true)
    //     const data = ntext.filter((ele)=> {
    //         return ele.id === id;
    //         setCheck(false)
            
    //     })
       

    //  }

    // ADD An item

    const btn = () => {
        // console.log("clicked");
        if(!text){
                alert("Please add your task")
        }
        else if(text && !toggle){
            newText(
                ntext.map((elem) => {
                    if(elem.id === isEdit){
                        return{...elem, name: text}}
                    return elem;}))
            changeTxt("");
            setToggle(true);
            setIsEdit(null);
        }
        else{
            const allInfo = {id: new Date().getTime().toString(), name: text}
            newText([...ntext, allInfo]);
            changeTxt("");
        }
        // else{
        //     newText((oldValue) => {
        //         return [...oldValue, text]
        //     });
        //     changeTxt("");
        // }
    }



    // delete an item

    const deleteItems = (id) => {
        // console.log(id);

        // old method
        // newText((oldValue) => {
        //     return oldValue.filter((element, index) => {
        //         return index !== id;
        //     })})

        newText( ntext.filter((element) => {
            return element.id !== id;
        }))
    }

    // edit an item

    const editItem = (id) => {
        let editItems = ntext.find((elem) => {
            // console.log(elem);
            return elem.id === id; })
            console.log(editItems);
       
        setToggle(false); //  toggle the button
        changeTxt(editItems.name); // get only name of the updated data 
        setIsEdit(id);}

    // set data in localstorage

    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(ntext))
    },[ntext] )
    
    return(
        <>
            <div className="main_div">
                <div className="centre_div">
                    <br />
                    {/* <br /> */}
                    <p className="title">To-Do List </p>
                    <br />

                    <input 
                        type={'text'} 
                        placeholder="Add your task"
                        onChange={(e) => changeTxt(e.target.value) }
                        value={text}
                        style={{fontSize:"20px"}}
                    />
                   	
                    {
                      toggle ? <i className="fa fa-plus" type={"submit"} onClick={btn}></i>
                     : <i 
                     className="fa fa-save" 
                     type={"submit"}
                     area-hidden="true"
                    onClick={btn}>    
                     </i>
                    }
                    <br/> <br/>
                    
                    <ol>
                      {ntext.map((element, index) => {
                            return (<List
                                    key ={index}
                                    id={index}
                                    text={element}
                                    onSelect = {deleteItems} 
                                    onEdit = {editItem}
                                    // onCheck ={onCheck}
                                    // check ={check}
                                    
                                    />)})}
                    </ol>

                    {/* multiple conditions using ternary operator */}
                    {/* {
                        ( ((ntext == "") ) ) ? "" : (ntext.length === 1) ? "" : <button 
                    className="rmv_all" 
                    onClick={() => {
                        newText([]);
                    }}>Remove All</button> 
                    } */}

                    {
                        (ntext.length <= 1) ? "" : 
                        <button 
                        className="rmv_all" 
                        onClick={() => {
                            newText([]) }}
                        onMouseEnter={() => {
                            setRemove("Delete All") }}
                        onMouseLeave={() => {
                            setRemove("Check List") }}
                        >{remove}</button> 
                    }                    
                </div>
            </div>
        </>
    )
}
export default App;