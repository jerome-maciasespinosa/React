import React, { Component } from 'react';

class Course extends Component {


    render () {
        const search =this.props.location.search;
        const params = new URLSearchParams(search)
        const title = params.get('title');

        let htmlSourceCode = <div>Please, select a course</div>;
        
        if (this.props.location.search && this.props.match.params.id) {
            htmlSourceCode = <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
          console.log(this.props);

        }
        
           

        
        

        return (
            <div>
                {htmlSourceCode}
            </div>
        );
    }
}

export default Course;