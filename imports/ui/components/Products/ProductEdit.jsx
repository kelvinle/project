import React, {Component} from 'react';

export default class ProductEdit extends Component {

  render() {
    let product = this.props.product;

    let updateProduct = () => {
      let name = this.refs.name.value.trim();
      let description = this.refs.description.value.trim();
      let volume = this.refs.volume.value.trim();

      console.warn('id ', this.props.product._id);

      console.log('name', name);
      console.log('description', description);

      let updateProduct = {
          name: name,
          description: description,
          volume: volume
        }

      Meteor.call("insertProduct", product, function(error, result){
        if(result === 'success'){
                console.warn("successful");
          }
          else{
            console.warn("error");
            return;
          }
        });
    }

    return (
      <div>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input ref="name" type="text" className="form-control" id="inputName" placeholder="Product Name" defaultValue={product.name}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <input ref="description" type="text" className="form-control" id="inputDescription" placeholder="Product Description" defaultValue={product.description}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={updateProduct} type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
