import React, { useState } from 'react'
import {Card,BurnBarrel} from './Card'
import AddCard from './AddCard'
const Column = ({title,headingColor,column,cards,setCards}) => {
    const [active,setActive] = useState(false)
    const filterdCards = cards.filter((c)=>c.column === column)

    const handleCardDragStart = (e,card)=>{
        // card object along with the event to set data
        e.dataTransfer.setData("card_id",card.id)
    }

    const highlightingIndicators = (e)=>{
        // manage to highlight the nearest card when card dragged over columns
        const indicators = getIndicators()
        const el = getNearestIndicator(e,indicators);

        el.element.style.opacity = "1"
    }
    const clearHighLights = ()=>{
        const indicators = getIndicators()
        indicators.forEach((ind)=>{
            ind.style.opacity = "0"
        })
    }
    const getNearestIndicator = (e,indicators)=>{
        const DISTANCE_OFFSET = 50
        const el = indicators.reduce(
            (closest,child) =>{
                const box = child.getBoundingClientRect();
                const offset = e.clientY  - (box.top + DISTANCE_OFFSET)
                if(offset < 0 && offset > closest.offset){
                    return {offset:offset , element:child}
                }else{
                    return closest
                }
            },
            {
                offset:Number.NEGATIVE_INFINITY,
                element:indicators[indicators.length - 1]
            }
        )
        return el
    }

    const handleDragOver = (e)=>{
        e.preventDefault()
        highlightingIndicators(e)
        setActive(true)
    }
    const handleDragLeave = () => {
    clearHighLights();
    setActive(false);
     };
  

    const getIndicators = ()=>{
        // return all the column indicators
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
    }

    const handleDragEnd = (e)=>{
        setActive(false)
        clearHighLights()
        const card_id = e.dataTransfer.getData("card_id");
        const indicators = getIndicators()
        const {element} = getNearestIndicator(e,indicators)
        const before = element.dataset.before || "-1"

        if(before != card_id){
            let copy = [...cards]
            
            let cardToContainer = copy.find((c)=>c.id == card_id)
            if (!cardToContainer) return;
            cardToContainer = {...cardToContainer,column}

            copy = copy.filter((c)=>c.id != card_id)

            const moveToBack = before === "-1";
            if(moveToBack){
                copy.push(cardToContainer)
            }else{
                const insertAtIndex = copy.findIndex((el)=>el.id == before)
                if (insertAtIndex === undefined) return;
                copy.splice(insertAtIndex,0,cardToContainer)
            }
            setCards(copy)
        }
        }

  return (
    <div className='w-56 shrink-0'>
        <div className='mb-3 flex items-center justify-between'>
            <h3 className={`font-medium ${headingColor}`}>
                {title}
            </h3>
            <span className='rounded text-sm text-neutral-400'>
                {cards.length}
            </span>
        </div>
        <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0" }`}>
        {/* for cards */}
        {filterdCards.map((card)=>
            <Card handleCardDragStart={handleCardDragStart} key={card.id} {...card}/> 
        )}
        <AddCard column={column} setCards={setCards}/>
        </div>

    </div>
  )
}

export default Column