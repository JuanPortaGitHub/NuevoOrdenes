import React from 'react'
import { invoiceFormFields } from '../../interface/invoice';


export const InvoiceData = ({register}) => {
  return (
    <div className="col-sm-6 .col-xs-12">
    <div className="card">
      <div
        className="card-header"
        style={{ backgroundColor: "#00BFFF", color: "white" }}
      >
        <h3 className="card-title">
          <b>Datos Factura</b>
        </h3>
      </div>
      <div className="card-body">
        {invoiceFormFields.map((invoice, i) => {
          return invoice.component === "select" ? (
            <div className="form-group row" key={i}>
              <label className={invoice.labelClassName}>
                {invoice.label}
              </label>
              <div className="col-sm-10">
                <select
                  {...register(invoice.id)}
                  name={invoice.name}
                  id={invoice.id}
                  type={invoice.type}
                  className={invoice.inputClassName}
                  placeholder={invoice.placeholder}
                  readOnly={invoice.readOnly}
                  required={invoice.required}
                >
                  {invoice.optionsSelect.map((option, i) =>{
                    return (
                    <option key={i} value={option.value}>{option.text}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          ) : (
            <div className="form-group row" key={i}>
              <label className={invoice.labelClassName}>
                {invoice.label}
              </label>
              <div className="col-sm-10">
                <input
                  {...register(invoice.id)}
                  name={invoice.name}
                  id={invoice.id}
                  type={invoice.type}
                  className={invoice.inputClassName}
                  placeholder={invoice.placeholder}
                  readOnly={invoice.readOnly}
                  required={invoice.required}
                />
              </div>
            </div>
          );
        })}

        
                           
      </div>
    </div>
  </div>
  )
}
