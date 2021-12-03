import React from 'react';
import Navbar from './Navbar';
import ProjectContainer from './ProjectContainer';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        
        return (
            <div className="homeContainer">
          <Navbar />
            <div className="projectsContainer">
                <ProjectContainer />
                <ProjectContainer />
                <ProjectContainer />
                <ProjectContainer />
                <ProjectContainer />
                <ProjectContainer />
            </div>
          </div>
        );
    }}

export default Home;