import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
 CardSubtitle, CardBlock } from 'reactstrap';

// How to make a fixed size

class ShopCard extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }


  goToIndividualCourse(id) {
     console.log(this.context)
    this.context.router.history.push('/course/' + id);
    // props.goToIndividualCourse(id);
  };

  render() {
    return (
      <Card xs="4" lg="2">
        <CardImg top width="100%" src={this.model.course_image} alt="Card image cap" />
        <CardBlock>
          <CardTitle>{this.model.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{this.model.description}</CardText>
          <CardText>{this.model.date_created}</CardText>
          <Button onClick={this.goToIndividualCourse.bind(this, this.model.course_id)}>View</Button>
        </CardBlock>
      </Card>
    );
  }


};

ShopCard.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default ShopCard;
