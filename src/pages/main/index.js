import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as S from '../../redux/modules/picture/selectors';

import { getPictureAC } from '../../redux/modules/picture/actions';
import View from './view';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPicture: bindActionCreators(getPictureAC, dispatch),
  }
};

const mapStateToProps = (state) => {
  return {
    picture: S.getPictureSelector(state),
    loading: S.getLoadingSelector(state),
    error: S.getErrorSelector(state),
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(View));