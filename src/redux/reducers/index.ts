import { combineReducers } from 'redux';
import reduxCornell from 'redux-cornell';
import { techs } from '../../constants/techData';

const { selectors, actions, superReducer } = reduxCornell({
  initialState: {
    devs: {
      data: {}
    },
    keyPointsOfInterest: {
      data: {}
    },
    games: {
      sorted: ['1a2b3c'],
      data: {
        '1a2b3c': {
          id: '1a2b3c',
          gameName: 'DOOM Minesweeper',
          description:
            'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. This version of minesweeper is themed with the classic game DOOM, which is considered by many as one of the greatest games of all time. It popularized the 1st person shooter genre and introduced 3D gaming to the world.',
          keyPointsOfInterestUrl:
            'https://gist.githubusercontent.com/eyaleizenberg/1d38da73f148dd4ceca62530ed23a3ca/raw/c30cf5e39bf21190d5b37e0a6e03f669c328f2a0/doom_description.md',
          developerGithubId: 'eyaleizenberg',
          url: 'https://io.github.com/minesweeper',
          techIds: ['react', 'html5', 'sass', 'typescript'],
          paypalUsername: 'iz.eyal@gmail.com',
          patreonUsername: '660835',
          createdDate: 'Mar 25, 2018',
          rating: 3
        }
      }
    },
    techs
  }
});

export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
