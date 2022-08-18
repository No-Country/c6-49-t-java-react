import React, {useContext} from "react";
import {BuscaminasContext} from '../../Contexts/BuscaminasContext'

function NewGame(){

    const {winner, newGame, newGToggle} = useContext(BuscaminasContext)

    return(
        <div className="newGame">
            {/* {winner
            ?
            <button className="newGame-btn" onClick={() => resetGame()}>
                Volver
            </button>
            : */}
            <button className="newGame-btn" onClick={() => newGToggle()}>
                ▶
            </button>
            {/* } */}
            
        </div>
    )
}

export default NewGame;