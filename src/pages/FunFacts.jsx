import React from 'react'
import { Link } from 'react-router-dom';

const FunFacts = () => {
  return (
    <>
    <article className="settingsContainer" >
        <h1 className="landingHeader">Fun Facts about the Mah Jong</h1>

        <div className="funContainer">
            <h2>Did You Know?</h2>
            <p>
                The origins of the MahJong game date back to Tang dynasty in China
                 (and Confucius) - about 618 - 907 AD - the golden age. 
                 The name of the game is related 
                  to word “yezijiupai” - which means “game-cards-alcohol” and it 
                  was one of the early versions. MahJong was very popular during 
                  Song dynasty and under the Qing dynasty the game took its 
                  original form.
            </p>
        </div>
        <div className="funContainer">
            <h2>Mah Jong Rules</h2>
            <p>
                MahJong is a four player, tile-based game.
                Although the rules are quite complex with many hidden aspects
                 the goal of the game is about to form various scoring patterns
                  from the tiles. MahJong tiles are equal in their strength.
                   The strategy of Mahjong involves choosing between multiple
                    target patterns based on the similarity of the tiles each
                     player possesses.
            </p>
        </div>
        <div className="funContainer">
            <h2>Mah Jong in USA</h2>
            <p>
                During the interwar period MahJong game got an increased popularity 
                in United States as a leisure game as well as a sport competition. 
                The Chinese game became Americanised, globalized and sank in into 
                pop-culture. Thanks to its characteristic signs and design it 
                still retained its Chinese connection, but the rules changed 
                depending on the region. 
            </p>
        </div>
        <div className="funContainer">
            <h2>Mah Jong Solitaire</h2>
            <p>
                The modern version of the game was adapted with the creation
                 of MahJong Solitaire. It is a relatively modern rendition of
                  the game that grew in popularity during the late 20th century
                 - with version for Apple in 1986 “Shanghai” and Microsoft in
                  1990 “Taipei”. Mahjong solitaire involves removing tiles from
                   a board by identifying matching pairs. This feature makes
                    it perfect for the purpose of this project.    
            </p>
        </div>
        <div className="funContainer">
            <h2>Cracking Mah Jong</h2>
            <p>
                Because of its complex rules the game has been
                 (during the recent years) a target for AI solving algorithms.
                  It can be challenging task as a game is of imperfect information
                   type (some of the information is hidden) as opposed to perfect
                    information games like chess or checkers.
                    The features of Mah Jong that are a subject of AI solving methods
                     and solving algorithms are important property and game legacy that
                     has its impact on the world of informatics.
            </p>
        </div>

    </article>
    </>
  )
}

export default FunFacts