package com.elgrangremio.gremioproyect.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Mascotas")
public class Mascota {

    @Id
    private String codigo_mascota;
    private String especie;
    private String nombre;
    private String raza;
    private int edad;
    private String estado;
    private String codigo_humano;

    // Getters y Setters

    public String getCodigo_mascota() {
        return codigo_mascota;
    }

    public void setCodigo_mascota(String codigo_mascota) {
        this.codigo_mascota = codigo_mascota;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCodigo_humano() {
        return codigo_humano;
    }

    public void setCodigo_humano(String codigo_humano) {
        this.codigo_humano = codigo_humano;
    }
}
