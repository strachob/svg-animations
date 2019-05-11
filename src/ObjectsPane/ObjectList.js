import React from 'react';

class ObjectList extends React.Component {
    constructor(props) {
        super(props);
        
        
        this.state = { objects: props.objects };
    }

    handleClick(index){
        this.props.selectItem(index);
    }

    render() {
        const objectsLis = this.state.objects.map((item, index) => {
            return (
                <li key={index} onClick={() => this.handleClick(index)} className="list-group-item list-group-item-action"> 
                    {item.name}
                 </li>
           )
       });

        return <div>
            <ul className="list-group">
                {objectsLis}
            </ul>
            </div>;
    }
}

export default ObjectList;