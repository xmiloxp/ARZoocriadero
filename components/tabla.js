import React, {Component} from 'react';


class TablaDinamic extends Component{
    constructor(){
        super();
        this.state= {
            title: '',
            description: '',
            app: false
        }
    }

    render() {
        return(
            <div className="" style="margin: 15px auto">
                <form id="myform" method="post">
                    <p><b>Stelected rows data</b></p>
                    <pre id="view-rows"></pre>
                    <p><b>Form data as submitted to the server</b></p>
                    <p><button className="btn btn-danger">View Selected</button><br/></p>
                    <table id="mytable" className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Posicion</th>
                                <th>Office</th>
                                <th>Extn.</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Posicion</th>
                                <th>Office</th>
                                <th>Extn.</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        );
    }

}