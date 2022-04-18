import React from 'react'

export const TotalsInvoice = () => {
  return (
    <div className="row" style={{justifyContent: 'right'}}>
    <div className="col-sm-6 .col-xs-12">
      <div className="table-responsive">
        <table
          className="table"
          style={{ backgroundColor: "white" }}
        >
          <tbody>
            <tr>
              <th>NETO 21%</th>
              <td id="sumneto21">0.00</td>
              <th>IVA 21%</th>
              <td id="total21">0.00</td>
            </tr>
            <tr>
              <th>NETO 10.5%</th>
              <td id="sumneto105">0.00</td>
              <th>IVA 10.5%</th>
              <td id="total105">0.00</td>
            </tr>
            <tr>
              <th>TOTAL NETO</th>
              <td id="totalneto">0.00</td>
              <th>TOTAL IVA</th>
              <td id="totalivas">0.00</td>
            </tr>
            <tr>
              <th colSpan="2">
                <h3>
                  <b>TOTAL FACTURA</b>
                </h3>
              </th>
              <td
                id="montototalfinal"
                colSpan="2"
                style={{ textAlign: "center" }}
              >
                <h3>
                  <b>0.00</b>
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
