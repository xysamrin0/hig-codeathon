import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';

function ContentCard({text}){
    function addReaction(){
        console.log("adding reaction");
        setNumReactions(numReactions+1);
    }
    function addReactionHeart(){
        setNumReactionsHeart(numReactionsHeart+1);
    }
    const [numReactions, setNumReactions] = useState(0);
    const [numReactionsHeart, setNumReactionsHeart] = useState(0);
    return(
        <Card style={{ height: '100px'}}>{text}

        <div style={{
                    position: 'absolute',
                    bottom:24,
                    right:5,
                }}>{numReactionsHeart}</div>
        <Button style={{
                    position: 'absolute',
                    bottom:20,
                    right:7,
                    border: "none",
                    background: "none"
                }}
                onClick={addReactionHeart}
        >❤️</Button>

        <div style={{
                    position: 'absolute',
                    bottom:4,
                    right:5,
                }}>{numReactions}</div>
        <Button style={{
                    position: 'absolute',
                    bottom:0,
                    right:7,
                    border: "none",
                    background: "none"
                }}
                onClick={addReaction}
        >👍</Button></Card>
    )
}

export default ContentCard;