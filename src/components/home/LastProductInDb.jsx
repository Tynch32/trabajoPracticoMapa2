const fechaDeHoy = new Date().toLocaleDateString();
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const LastProductInDb = () => {
    const mapRef = useRef(null);

  useEffect(() => {
    // Inicializar el mapa solo una vez
    const map = L.map(mapRef.current).setView([-34.5230973, -58.7053485], 13);

    // Agregar capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Agregar un marcador simple de ejemplo
    L.marker([-34.5230973, -58.7053485])
      .addTo(map)
      .bindPopup("Ubicación de referencia")
      .openPopup();

    // Limpiar mapa al desmontar el componente
    return () => {
      map.remove();
    };
    }, []);
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Estado de la actualización diaria</h5>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="m-0 font-weight-bold text-gray-800">Estado</h5>
                        <h5 className="m-0 font-weight-bold text-gray-800">Online <i class="fa-solid fa-signal" style={{ color: "green" }}></i></h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="m-0 font-weight-bold text-gray-800">Hora de la ultima actualización</h5>
                        <h5 className="m-0 font-weight-bold text-gray-800">06:00 <i class="fa-solid fa-clock"></i></h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="m-0 font-weight-bold text-gray-800">Fecha de la ultima actualización</h5>
                        <h5 className="m-0 font-weight-bold text-gray-800">{fechaDeHoy} <i class="fa-solid fa-calendar-days"></i></h5>
                    </div>
                    <div
                        ref={mapRef}
                        style={{
                        height: "300px",
                        width: "100%",
                        borderRadius: "10px",
                        border: "1px solid #ddd",
                        marginTop: "15px",
                        }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
