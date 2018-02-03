import React, { Component } from 'react';
import CryptoAssetCard from "../components/CryptoAssetCard";
import Api from "../api/Api";


class SellingPage extends Component {


  render() {

    const cryptoAssets = Api.getForSale();

    return (
      <div>
        <h1>For sale</h1>
        {cryptoAssets.map(asset => (<CryptoAssetCard asset={asset}/>))}

      </div>
    );
  }

}

export default SellingPage;
