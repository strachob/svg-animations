import React from 'react';

class ObjectList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { objects: props.objects };
    }

    render() {
        const objectsLis = this.props.objects.map((item, index) => {
            return (
                <li key={index} 
                    onClick={(e) => this.props.selectItem(e, index)} 
                    className="list-group-item list-group-item-action"> 
                    {item.name}
                    <button className="btn btn-primary trash-btn" onClick={(e) => this.props.deleteItem(e,index)}>
                        <i className="fa fa-trash"></i>
                    </button>
                 </li>
           )
       });

        return <div>
            <ul className="list-group scrollable-config">
                {objectsLis}
            </ul>
            </div>;
    }
}

export default ObjectList;