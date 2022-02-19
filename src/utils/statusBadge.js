import React from 'react';

export const statusBadge = (status) => {
    switch (status) {
        case 'Abierto':
            return <h5> <h5><span className="badge bg-primary" style={{color: 'black'}}>Abierto</span></h5></h5>
        case 'Urgente':
            return <h5> <span className="badge bg-danger" style={{color: 'black'}}>Urgente</span></h5>
        case 'Presupuestar':
            return <h5> <span className="badge bg-primary" style={{color: 'black'}}>Presupuestar</span></h5>
        case 'Confirmado':
            return <h5> <span className="badge bg-warning" style={{color: 'black'}}>Confirmado</span></h5>
        case 'Rechazado':
            return <h5> <span className="badge bg-dark" style={{color: 'black'}}>Rechazado</span></h5>
        case 'Listo':
            return <h5> <span className="badge bg-success" style={{color: 'black'}}>Listo</span></h5>
        case 'Entregado':
            return <h5> <span className="badge bg-danger" style={{color: 'black'}}>Entregado</span></h5>

        default:
            break;
    }

    
};
