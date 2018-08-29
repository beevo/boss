import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



class News extends Component {
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    const { name, icon, content } = this.props;
    let newsItems = <span>Loading</span>
    if (content) {

    newsItems = content.map((tile, key) => {
      return (
        <GridListTile key={key}>
          <img src={tile.imgUrl} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>{tile.abstract}</span>}
            actionIcon={
              <a href={tile.url} target="_blank">
                <IconButton className="icon-button">
                  <InfoIcon />
                </IconButton>
              </a>

            }
          />
        </GridListTile>
    )});
    }
    const style = {
      margin: 'auto',
      maxWidth: '1024px',
      paddingTop: '5px'
    }
    return (
      <div className="root">
        <AppHeader icon={icon} name={name} />
        <div style={style}>
          <GridList cellHeight={300} className="gridList">
            {newsItems}
          </GridList>
        </div>

      </div>

    )
  }
}

export default News;
