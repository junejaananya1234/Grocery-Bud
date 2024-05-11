function ListItem({label = ""}) {
    return(
        <>
        <li className="flex justify-center items-center gap-10 text-lg text-white">
            <input type="checkbox"   />
            {label}
            <button className="bg-sky-500 rounded-full text-lg p-1">Delete</button>
            </li>
           
        </>
    )
}

export default ListItem;