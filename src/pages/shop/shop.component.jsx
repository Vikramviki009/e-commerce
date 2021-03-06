import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';
import './shop.styles.scss';


const ShopPage = ({ match, fetchCollectionsStart }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`}  component={CollectionOverviewContainer} />
               <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps) (ShopPage);