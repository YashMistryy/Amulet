import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const Card = ({ id, title, column , handleCardDragStart }) => {
  return (
    <>
    <DropIndicator before_id={id} column={column}/>
    <motion.div 
    layout
    layoutId={id}
    draggable="true"
    onDragStart={(e)=>handleCardDragStart(e,{id, title, column})}
    className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing">
      {title}
    </motion.div>
    </>
  );
};

const BurnBarrel = ({cards , setCards})=>{
    // the delete icon to the right of the screen
    const [active,setActive ] = useState(false)
    const onDragOver = (e)=>{
        // handles whevere anything is dragged over burnBarrel
        e.preventDefault()
        setActive(true)
    }
    const onDragLeave = (e)=>{
        // handles whevere anything is dragged over burnBarrel
        e.preventDefault()
        setActive(false)
    }
    const onDragEnd = (e)=>{
        // handles whevere anything is dragged over burnBarrel
        debugger
        const card_id = e.dataTransfer.getData("card_id");
        // console.log(cards);
        let new_cards = cards.filter((c)=>c.id != card_id)
        // console.log(new_cards);
        setCards(new_cards)
        setActive(false)
        debugger

    }
    return(
        <div
        onDrop={onDragEnd}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`
        mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl 
        ${ active ? "border-red-800 bg-red-800/20 text-red-500":
        "border-neutral-800 bg-neutral-800/20 text-neutral-500"}
        `}>
            {active ?
            <FaFire className="animate-bounce"/>:<FaTrash/>
            }
        </div>
    )
}

const DropIndicator = ({before_id , column})=>{
    return(
    <div 
     data-before={before_id || "-1"}
     data-column = {column}
     className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0">
    </div>
    )
}
export{Card , BurnBarrel};
