import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';
import AppHeader from '../components/AppHeader';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


class Codepad extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    const { name, icon, content } = this.props;
    let newsItems = <span>Loading</span>
    if (content) {
    console.log(content[0].multimedia[0].url);
      newsItems = content.map((tile, key) => {
        console.log(tile.multimedia);
        let imgUrl = '';
        if (tile.multimedia[4]) {
          imgUrl = tile.multimedia[4].url;
        }else {
          return;
        }
        return (
          <GridListTile key={key}>
            <img src={imgUrl} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.abstract}</span>}
              actionIcon={
                <IconButton className="icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
      )});
    }
    // console.log(newsItems);

    return (
      <div className="root">
        <AppHeader icon={icon} name={name} />
        <GridList cellHeight={300} className="gridList">
          {newsItems}
        </GridList>
      </div>

    )
  }
}

export default Codepad;