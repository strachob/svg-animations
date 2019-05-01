import React from 'react';

class ObjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objects: props.objects };
    }

    render() {
        return <div>
            <ul>
                <li>First object</li>
                <li>Second object</li>
                <li>Third object</li>
            </ul>
            </div>;
    }
}

export default ObjectList;