import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as S from '../../redux/modules/picture/selectors';
import { removeHistoryItemAC } from '../../redux/modules/picture/actions';

import View from './view';

const mapDispatchToProps = (dispatch) => {
  return {
    removeHistoryItem: bindActionCreators(removeHistoryItemAC, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    history: S.getHistory(state),
    loading: S.getLoadingSelector(state),
    error: S.getErrorSelector(state),
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(View));