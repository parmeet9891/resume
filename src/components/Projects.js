import React from 'react';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      projectLists : [
      {
        "name" : "Pokedex-Redux",
        "desc" : "A Simple Pokedex Application which fetches pokemon information using redux and also displays the information of each pokemon when clicked on it.",
        "technologies" : "React, Redux",
        "bg" : "#7DCC93",
        "url" : "https://github.com/parmeet9891/pokedex-redux",
      },
      {
        "name" : "Flappy Bird",
        "desc" : "A JavaScript Friendly game, where a player controls a bird attempting to flying between the columns of green pipes without hitting them. Audio is being implemented.",
        "technologies" : "Vanilla JavaScript",
        "bg" : "#f76160",
        "url" : "https://github.com/parmeet9891/Flappy-Bird-JS",
      },
      {
        "name" : "Github Battle",
        "desc" : "Github Battle application helps you battle your github profile with your friends or competitors. This Application also shows the most viewed (most starred) github profile for different programming language.",
        "technologies" : "React JS",
        "bg" : "#66A7D5",
        "url" : "https://github.com/parmeet9891/battle-github",
      },
      {
        "name" : "Arcade Game",
        "desc" : "Being a fighting game, player has to dodge the enemies and collect the gems as much as possible to win this. Sound has been implemented. Also before the start of the game, player can choose the character they wants to play with. ",
        "technologies" : "Vanilla JavaScript",
        "bg" : "#f8c687",
        "url" : "https://github.com/parmeet9891/ArcadeGame-JavaScript",
      },
      {
        "name" : "Get Info",
        "desc" : "This application shows the different kind of information of Indian Railways. Fare between two stations, Trains between two stations, estimated time, cost. Also looking forward to implement flight features in future.",
        "technologies" : "React-Native, Axios",
        "bg" : "#679895",
        "url" : "https://github.com/parmeet9891/GetInfo",
      },
      {
        "name" : "SDS Security",
        "desc" : "An application which is currently used by more than 50 users to mark their attendance by scanning the  bar code. This application has a special feature for admins who can view the daily report of their employees. Cant' share the code :P",
        "technologies" : "React-Native, Node js",
        "bg" : "#E29470",
        "url" : "This is the live application, Can't share the code.",
      }
      ]

    }
  }

  render() {

    let projects = this.state.projectLists.map((value,index) => {
      return (
        <div className = "container-fluid" key={index} style = {{backgroundColor: value.bg }}>
          <div className = "row">
            <div className = "col-md-12">
              <div className = "shot-info text-center">
                <h2>{value.name}</h2>
                <h3>{value.technologies}</h3>

                <p className = "proj-desc">{value.desc}</p>

                <p className = "btn-holder shot-btn">
                  <a href = {value.url} className = "main-btn" target = "_blank">VIEW ON GITHUB
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
        <section id = "projects">
          {projects}
        </section>
    )
  }

}

export default Projects;
