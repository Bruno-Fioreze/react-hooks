import React, { Component } from "react";
import Twitter from "./twitter_with_class"

class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    //const { posts } = this.props  
    //console.log("componente montado", posts)
    setTimeout(
        () => {
            this.setState({
              loading: true
            })
        }, 3000
    )
}    

  onRemove = () => {
    this.setState({
      actived: false
    });
  }

  
  render () {
    const posts = [
      {
        title: "xpto 1",
        description: "foo 1"
      },
      {
        title: "xpto 2",
        description: "foo 2"
      },
    ]
    return (
      <div>
        <button onClick={this.onRemove}> Remover Componente </button>
        {
          this.state.actived && (
            <Twitter posts={posts} loading={this.state.loading} />
          )

        }
      </div>
    )
  }
}

export default App