import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverView from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
  // console.log(match)
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route exact path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  )
}

export default ShopPage
