import React, { useEffect, useState, memo} from "react"

//Pergunta se o componente é igual.
const areEqual = (prevProps, nextProps) => {
    // se for igual ele não irá atualizar.
    return prevProps.loading === nextProps.loading
}

export const Twitter = (props) => {

    const { loading } = props
    const [ tweet, setTweet] = useState("title");
    //state = {
    //    tweet: "title"
   //}
    //depreciado
    //componentWillMount(){
    //    const { posts } = this.props  
    //    console.log("Componente montado", posts)
    //}

    //life cycle = inicialização, montagem, atualização e desmontagem.

    //Montagem
    //Quando o componente for renderizado, esse método será chamado..
    //componentDidMount = () => {
        //const { posts } = this.props  
        //console.log("Componente montado", posts)
    //    const { posts, loading } = this.props
    //    console.log("Componente montado", posts)
    //    console.log("Componente montado, loading.", loading)
    //}  

    //com o array vazio é equivalente ao componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log("Componente montado", posts)
        console.log("Componente montado, loading.", loading)
    }, [])

    //exemplo de uso, remover o EventListener
    //desmontagem do elemento.
    // componentWillUnmount = () => {
    //     console.log("Componente desmontado")
    // }

    //componentWillUnmount
    useEffect(()=> {
        return () => {
            console.log("Componente desmotando")    
        }
    }, [])


    //atualização
    // componentDidUpdate = (prevProps) => {
    //     const { loading } = props
    //     if ( props.loading !== prevProps.loading){
    //         console.log("Componente carregando", loading)
    //     }
    // }

    //componentDidUpdate
    useEffect(() => {
        console.log("componente montado, loading.", loading)
    }, [loading])


    // //posso renderizar a aplicação novamente ?
    // shouldComponentUpdate = (nextProps, nextState) => {
    //     return state.tweet !== nextState.tweet
    // }
    
    const handleTweet = () => {
        setTweet("Tweet Atualizado")
    }
    // const { posts } = props;
    // console.log("render", posts);

    //<button onClick={tweet}>
    //Re-render
    //</button>
    console.log("Tweet atualizado", tweet)
    return (
        <div>
            <button onClick={handleTweet}> 
                Re-render
             </button>
            teste
        </div>
    )
}

export default memo(Twitter, areEqual)