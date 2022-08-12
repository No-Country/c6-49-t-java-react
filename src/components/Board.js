import React, {useContext, useEffect} from "react";
import {SudokuContext} from '../Contexts/SudokuContext'
import Row from './Row';

function Board(){

    const {posiblesNumbers} = useContext(SudokuContext)

    return(
        <div className="board">
                <div>    
                    {posiblesNumbers.map((row) =>{
                        return(
                            <Row 
                                row = {row} 
                                r = {posiblesNumbers.indexOf(row)}                        
                            />
                        )
                    })}
                </div>
        </div>        
    )
}

export default Board