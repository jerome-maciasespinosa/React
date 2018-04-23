import React, { Component } from 'react';

class Course extends Component {

    state = {
        courseTitle: ''
    }
    componentDidMount() { // Course solution to get query params
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            this.setState({courseTitle: param})
        }
    }
    componentDidUpdate() { // Course solution to get query params
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }
    

    render () {
        // My solution to get query params
        // const search =this.props.location.search;
        // const params = new URLSearchParams(search)
        // const title = params.get('title');

        let htmlSourceCode = <div>Please, select a course</div>;
        
        if (this.state.courseTitle && this.props.match.params.id) {
            htmlSourceCode = <div>
                <h1>{this.state.courseTitle}</h1>
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