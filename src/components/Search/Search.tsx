import * as React from 'react';
import * as classnames from 'classnames';
import SearchResultsContainer from '../SearchResults/SearchResults.container';
const searchIcon = require('../../assets/images/search.svg');
const cancelButton = require('../../assets/images/cancelButton.svg');
const styles = require('./Search.scss');

interface ISearchState {
  expanded: boolean;
  collapsing: boolean;
  query: string;
}

interface IProps {
  searchGame: (query: string) => any;
  cancelSearch: () => void;
}

export default class Search extends React.PureComponent<IProps, ISearchState> {
  private inputField: any;
  private beginSearch: any;

  constructor(props: IProps) {
    super(props);
    this.inputField = React.createRef();
    this.state = {
      expanded: false,
      collapsing: false,
      query: ''
    };
  }

  expandSearch = () => {
    this.setState({ expanded: true });
    this.inputField.current.focus();
  };

  collapseSearch = () => {
    this.props.cancelSearch();
    this.setState({ collapsing: true });
    setTimeout(
      () => this.setState({ collapsing: false, expanded: false, query: '' }),
      400
    );
  };

  onChange = (event: any) => {
    clearTimeout(this.beginSearch);
    const { value } = event.target;
    this.setState({ query: value });
    if (value.length > 1) {
      this.beginSearch = setTimeout(() => this.props.searchGame(value), 500);
    }
  };

  render() {
    const { expanded, collapsing, query } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <img
            className={classnames(styles.searchIcon, {
              [styles.visible]: !expanded
            })}
            src={searchIcon}
            onClick={this.expandSearch}
          />
          <input
            className={classnames(styles.field, {
              [styles.visible]: expanded,
              [styles.collapsing]: collapsing
            })}
            type={'text'}
            ref={this.inputField}
            onChange={this.onChange}
            value={query}
          />
          <img
            className={classnames(styles.cancelButton, {
              [styles.visible]: expanded
            })}
            src={cancelButton}
            onClick={this.collapseSearch}
          />
        </div>
        <SearchResultsContainer />
      </React.Fragment>
    );
  }
}
