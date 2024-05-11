import { useState } from "react";
import { toast } from "react-toastify";
import ListItem from "./ListItem";

const Grocery = () =>{

  const [groceryInput, setGroceryInput] = useState("")
  const [groceryList, setGroceryList] = useState([]);

    const handleInputChange = (e) =>{
            setGroceryInput(e.target.value);
    };

    const insertGroceryItem = () =>{
        if(groceryInput.trim() === ""){
            toast.error("Please inset Grocery Items",{
                position :"top-center"
                
            })
            return;
        }
        setGroceryList([...groceryList, {item: groceryInput}]);
    }

    return(
        <div className="flex flex-col gap-7">
           <h1 className="font-bold text-5xl tracking-wide text-sky-500">Grocery Bud</h1>
           <section className="flex justify-center items-center gap-5"><input type="text" placeholder="type..." value={groceryInput} onChange={handleInputChange} className="h-10 w-52 outline-none bg-sky-500 p-1 rounded-xl placeholder:text-black"></input>
           <section><button className="bg-sky-500 p-1 h-10 w-11 rounded-xl font-bold" onClick={insertGroceryItem}>ADD</button></section>
           </section>
           {/* display our list */}
           <section>
            <ul>
                {
                    groceryList.map((el, index) =><ListItem key={index} label={el.item}/>)
                }
            </ul>
           </section>
         
          
        </div>
    )
}

export default Grocery;