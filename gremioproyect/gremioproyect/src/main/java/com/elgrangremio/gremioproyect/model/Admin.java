package com.elgrangremio.gremioproyect.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Admins")
public class Admin {

    @Id
    private String codigo_admin;
    private String nombre;
    private String apellido;
    private String email;
    private String rol;
    private String telefono;

    // Getters y Setters

    public String getCodigo_admin() {
        return codigo_admin;
    }

    public void setCodigo_admin(String codigo_admin) {
        this.codigo_admin = codigo_admin;
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

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
