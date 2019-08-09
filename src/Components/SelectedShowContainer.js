import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = () => {
    if (!!this.props.allEpisodes){
      let seasons = this.props.allEpisodes.map((e)=> e.season)
      let uniqueSeasons = [...this.unique(seasons)]
      return uniqueSeasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    return this.props.allEpisodes.map((e)=>{
      if (e.season == this.state.selectedSeason){
        return (<Episode eachEpisode={e} key={e.id}/>)
      }else{
        return null}
    })
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }


  render() {
    const { selectedShow } = this.props
    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

  unique = array => {
    var arr = [];
    for(var i = 0; i < array.length; i++) {
      if(!arr.includes(array[i])) {
          arr.push(array[i]);
      }
    }
    return arr;
  }
}

export  default SelectedShowContainer;
