import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionOverview from './collections-overview.component';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;