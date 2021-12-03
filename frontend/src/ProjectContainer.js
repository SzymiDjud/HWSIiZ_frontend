import React from 'react';


class ProjectContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }



    render(){
        
        return (
          <div className="mainProjectContainer">
              <div className="topBar">
                    Tytuł
              </div>
              <div className="icon">

              </div>
              <div className="projectContainer">
                {this.props.about}
              </div>

          </div>
        );
    }}

export default ProjectContainer;