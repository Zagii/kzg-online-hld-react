
import React, { Component } from 'react';
import mysql from 'mysql';

class HldComponent extends Component{
    constructor(props){
        super(props);
        this.state={projektID:'PR-2215'};
    }

    componentDidMount() {
        this.odswiez();
      }
    render()
    {
      
      return(<div> Tytuł </div>);
      
    }
    odswiez()
    {
        var mysql = require('mysql')
        var connection = mysql.createConnection({
        host     : '10.22.23.82',
        user     : 'eakzg',
        password : 'a',
        database : 'eakzg_schema'
        }); 
        connection.connect();
        connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
            if (err) throw err
          
            console.log('The solution is: ', rows[0].solution)
          })
          
          connection.end()
    
        fetch("https://randomuser.me/api/?format=json&results=10")
        .then(res => res.json())
        .then(json => this.setState({ contacts: json.results }));  
    }
}

  export default HldComponent;