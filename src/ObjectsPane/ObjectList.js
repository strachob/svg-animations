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
                <li key={index} onClick={() => this.handleClick(index)} className="List-Object"> 
                    {item.name}
                 </li>
           )
       });

        return <div>
            <ul>
                {objectsLis}
            </ul>
            </div>;
    }
}

export default ObjectList;