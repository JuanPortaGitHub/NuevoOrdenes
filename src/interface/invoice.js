export const invoiceFormFields = [
    {
      name: "local",
      id: "local",
      label: "SUCURSAL",
      labelClassName: 'col-sm-2 col-form-label form-control-sm',
      type: "text",
      inputClassName: "form-control form-control-sm",
      placeholder: "SUCURSAL ...",
      readOnly: false,
      required: true,
      component: 'select',
      optionsSelect: [{value: 'Rondeau', text: 'Rondeau'},{value: 'Achaval', text: 'Achaval'}]
    },
    {
        name: "fechaFactura",
        id: "fechaFactura",
        label: "Fecha Factura",
        labelClassName: 'col-sm-2 col-form-label form-control-sm',
        type: "date",
        inputClassName: "form-control form-control-sm",
        placeholder: "Fecha Factura ...",
        readOnly: false,
        required: true,
      },
      {
        name: "cotizacionDolar",
        id: "cotizacionDolar",
        label: "Dolar",
        labelClassName: 'col-sm-2 col-form-label form-control-sm',
        type: "number",
        inputClassName: "form-control form-control-sm",
        placeholder: "Dolar ...",
        readOnly: true,
        required: true,
      },
  ];
  