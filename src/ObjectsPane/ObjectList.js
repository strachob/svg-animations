import React from 'react';

class ObjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objects: props.objects };
    }

    render() {
        const objectsLis = this.state.objects.map((item, index) => {
            return (
                <li key={index}> {item.name} </li>
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