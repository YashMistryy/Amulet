import React, { useState } from 'react'
import Column from '../components/Column'
import {Default_cards} from '../utils/constants'
import { BurnBarrel } from '../components/Card'
import ProSidebar, {    } from '../components/ProSidebar'
const Dashboard = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50 font-font1'>
        <Board/>
    </div>
  )
}
//title,headingColor,column,cards,setCards
const Board = ()=>{
    const [cards,setCards] = useState(Default_cards)
    return(<div className='flex h-screen'>
            <ProSidebar/>
        <div className="flex h-full justify-between w-full gap-3 overflow-scroll p-12 no-scrollbar">
                <Column
                title="To do"
                headingColor = "text-green-200"
                column="to_do"
                cards = {cards}
                setCards = {setCards}
                />
                <Column
                title="In Progress"
                headingColor = "text-yellow-200"
                column="in_progress"
                cards = {cards}
                setCards = {setCards}
                />
                <Column
                title="Done"
                headingColor = "text-green-200"
                column="done"
                cards = {cards}
                setCards = {setCards}
                />
                <Column
                title="Backlog"
                headingColor = "text-neutral-500"
                column="backlog"
                cards = {cards}
                setCards = {setCards}
                />
                <BurnBarrel setCards={setCards} cards={cards}/>
        </div>
        </div>
    )
}

export default Dashboard