import React, { Component } from 'react'


class CropDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            crop_name: '',
            area: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        if (event.target.name === "crop_name") {
            this.setState({ crop_name: event.target.value })
        }
        else if (event.target.name === "area") {
            this.setState({ area: event.target.value })
        }
    }

    handleSubmit(event) {
        if (this.state.crop_name === null || this.state.area === null) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <header><h2>Crop Details</h2>
                </header>
                <br /> <br />
                <form action="http://localhost:4000/" method="POST" onSubmit={this.handleSubmit} name="myform" >
                    <div className="form-group col-md-3">
                        <label>Select Crop Name</label>
                        <select className="form-control" id="exampleFormControlSelect1" name="crop_name" id="" onChange={this.onChange} required>
                            <option>Bananas</option>
                            <option>Palm</option>
                            <option>Sugarcane</option>
                            <option>Millet</option>
                            <option>Maze</option>
                            <option>Wheat</option>
                            <option>Potato</option>
                            <option>Rice</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Area</label><br />
                        <select className="form-control" id="exampleFormControlSelect1" name="area" id="" onChange={this.onChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary" />
                </form>

            </div >
        )
    }
}

export default CropDetails;