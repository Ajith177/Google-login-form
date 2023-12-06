import React from 'react'

const Array_of_object = () => {

    const list=[
        {
            "name":"Ajithganapathy","workplace":"google","location":"Mountain-view in California  at United states"
        },
        {
            "name":"Prajith","workplace":"twitter","location":"sanfrancisco at Califonia " 
        },
        {
            "name":"Ajith","workplace":"facebook","location":"Trichy"
        },
        {
            "name":"Ajithgun","workplace":"Apple","location":"Cupertino at united states"
        }
    ];

  return (
    
    <div style={{textAlign:'-webkit-center',marginTop:'12%'}}>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>Workplace</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((row)=> (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.workplace}</td>
                            <td>{row.location}</td>

                        </tr>
                    ))
                }
            </tbody>

        
        </table>
      
    </div>
  )
}

export default Array_of_object;
