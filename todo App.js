import { useState } from "react";

const TodoApp=()=>{
    let[items, updatetext]=useState([
            {text : "Learn Html", completed:true},
            {text:"Learn CSS", completed:true},
            {text:"Learn JS", completed:true}
]);

    let[value, pickvalue]=useState("");

    let[msg, updatemsg]=useState("");

    const save=()=>{
        if(value === ""){
            updatemsg("Enter Valid Input");
        }else{
        updatetext(items=[...items, {text:value , completed:false}]);
        }
    }
    const delitem=(index)=>{
        items.splice(index, 1);
        updatetext(items=[...items]);
    }
    const completed=(index)=>{
        const newItems =[...items];
        newItems[index].completed = !newItems[index].completed;
        updatetext(newItems);
    } 
    
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div>
                        <input type="text" className="form-control" placeholder="Enter your text" 
                        onChange={obj=>pickvalue(obj.target.value)}/>
                        <p className="text-danger">{msg}</p>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-primary" onClick={save}>Save</button>
                    </div>
                    {
                        items.map((item, index)=>{
                            return(
                                    <div className="border w-100 rounded d-flex flex-row mb-3">
                                        <label className="checkbox-label" key={index}
                                        onClick={completed.bind(this, index)}
                                        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                                        >{item.text}</label>
                                        <div className="icon-container">
                                            <button className="btn"
                                                onClick={delitem.bind(this, index)}><i className="fa fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                            )
                        })
                    }
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}
export default TodoApp;