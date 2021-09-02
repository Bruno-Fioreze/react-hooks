import React, { Component } from "react";

class Twitter extends Component {

    state = {
        tweet: "title"
    }
    //depreciado
    //componentWillMount(){
    //    const { posts } = this.props  
    //    console.log("componente montado", posts)
    //}

    //life cycle = inicialização, montagem, atualização e desmontagem.

    //Montagem
    //Quando o componente for renderizado, esse método será chamado..
    componentDidMount() {
        //const { posts } = this.props  
        //console.log("componente montado", posts)
        const { posts, loading } = this.props
        console.log("componente montado", posts)
        console.log("componente montado, loading.", loading)
    }  

    //exemplo de uso, remover o EventListener
    //desmontagem do elemento.
    componentWillUnmount() {
        console.log("componente desmontado")
    }

    //atualização
    componentDidUpdate(prevProps) {
        const { loading } = this.props
        if ( this.props.loading !== prevProps.loading){
            console.log("componente carregando", loading)
        }
    }

    //posso renderizar a aplicação novamente ?
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.tweet !== nextState.tweet
    }
    
    tweet = () => {
        this.setState({
            tweet: true
        })
    }
    render () {
        const { posts } = this.props;
        console.log("render", posts);
        return (
            <div>
                <button onClick={this.tweet}>
                    Re-render
                </button>
                teste
            </div>
        )
    };
}

export default Twitter