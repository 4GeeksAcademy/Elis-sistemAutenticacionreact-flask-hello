import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Private() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);  // Puedes mantener [navigate], ya que es una función estable
    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login");
    };
    return (
        <div className="container d-flex flex-column mt-5">
            <h2 className="text-center">Solo pueden ver este baile los elegidos.</h2>
            <img src="https://media.tenor.com/Tr4svi_j4zEAAAAM/skeleton-dancing.gif" alt="Skeleton dancing" />
            <button onClick={handleLogout} className="btn mt-5 w-50 m-auto btn-danger">Cerrar Sesión</button>
        </div>
    );
}