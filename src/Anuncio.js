import React, { Component } from 'react'
import axios from 'axios'

class Anuncio extends Component {
  constructor(props){
    super(props)

      const id = this.props.match.params.idAnuncio
      const url = `https://mercadodev-8ffd0.firebaseio.com/anuncios/${id}.json`

      this.state = {
        anuncio: {},
        isLoading: true
      }

      axios
        .get(url)
        .then( data => {
          this.setState({ anuncio: data.data, isLoading: false })
        })
  }
  render(){
    const anuncio = this.state.anuncio
    
    //Alternativa de IF ao invés de usar &&
    if(this.state.isLoading){
      return <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    }
    
    return(
      <div>
        <h1>{anuncio.nome}</h1>
        <p><img src={anuncio.foto} /></p>
      </div>
    )
  }
}

export default Anuncio