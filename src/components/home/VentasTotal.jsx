export const VentasTotal = () => {
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Centros de asistencia</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    <i class="fa-solid fa-truck-medical"></i> 10 Centros Moviles
                                </div>
                                <div className="card-body">
                                    <i class="fa-solid fa-hospital"></i> 5 Centros Fijos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
