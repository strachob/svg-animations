import React from 'react';

function ObjectList(props) {   
    const objects = props.objects;
    const objectsElements = objects.map((item, index) => 
        <li key={index} onClick={(e) => props.selectItem(e, index)} 
            className="list-group-item list-group-item-action"> 
            {item.name}
            <button className="btn btn-primary trash-btn" onClick={(e) => props.deleteItem(e,index)}>
                <i className="fa fa-trash"></i>
            </button>
        </li>
    );
    
    return (
        <div>
            <ul className="list-group scrollable-config">
                {objectsElements}
            </ul>
        </div>
    );
}

export default ObjectList;