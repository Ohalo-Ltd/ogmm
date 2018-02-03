import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import moment from 'moment';
import './CryptoAssetCard.css';


class CryptoAssetCard extends Component {

  render() {
    const { asset } = this.props;

    return <Card className="crypto-card">
      <CardHeader
        title={'What: ' + asset.name + ', Quantity: ' + asset.quantity + ' tokens, Price: ' + asset.price + ' ' + asset.currency}
        subtitle={'Posted on ' + moment(asset.dateAdded).format('MMMM Do YYYY, h:mm a')}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <div className="details">
          <table>
            <tr>
              <td className="category">Type:</td>
              <td>{asset.category}</td>
            </tr>
            <tr>
              <td className="category">Offered by:</td>
              <td>{asset.owner}</td>
            </tr>
            <tr>
              <td className="category">Asset Location:</td>
              <td className="code">{asset.pointer ? asset.pointer : 'N/A'}</td>
            </tr>
            <tr>
              <td className="category">Payment address:</td>
              <td className="code">{asset.address ? asset.address : 'N/A'}</td>
            </tr>
          </table>
        </div>
        <div className={"description"}>
          {asset.description}
        </div>
      </CardText>
    </Card>
  }
}

export default CryptoAssetCard;
