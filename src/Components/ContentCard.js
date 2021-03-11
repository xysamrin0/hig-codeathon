import React from 'react';
import {Card} from 'react-bootstrap';

function ContentCard({text}){
    return(
        <Card style={{ height: '100px'}}>{text}</Card>
    )
}

export default ContentCard;