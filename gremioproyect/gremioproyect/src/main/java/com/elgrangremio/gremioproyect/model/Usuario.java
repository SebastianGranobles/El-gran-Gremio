package com.elgrangremio.gremioproyect.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuarios")
public class Usuario {

    @Id
    private String codigo_humano;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private String direccion;

    // Getters y Setters

    public String getCodigo_humano() {
        return codigo_humano;
    }

    public void setCodigo_humano(String codigo_humano) {
        this.codigo_humano = codigo_humano;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
