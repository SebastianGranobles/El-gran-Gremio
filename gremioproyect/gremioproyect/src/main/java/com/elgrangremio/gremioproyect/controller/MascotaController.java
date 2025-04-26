package com.elgrangremio.gremioproyect.controller;

import com.elgrangremio.gremioproyect.model.Mascota;
import com.elgrangremio.gremioproyect.repository.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mascotas")
public class MascotaController {

    @Autowired
    private MascotaRepository mascotaRepository;

    // Obtener todas las mascotas
    @GetMapping
    public List<Mascota> getAllMascotas() {
        return mascotaRepository.findAll();
    }

    // Obtener mascota por ID
    @GetMapping("/{id}")
    public Optional<Mascota> getMascotaById(@PathVariable String id) {
        return mascotaRepository.findById(id);
    }

    // Crear nueva mascota
    @PostMapping
    public Mascota createMascota(@RequestBody Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    // Actualizar mascota
    @PutMapping("/{id}")
    public Mascota updateMascota(@PathVariable String id, @RequestBody Mascota mascota) {
        mascota.setCodigo_mascota(id);
        return mascotaRepository.save(mascota);
    }

    // Eliminar mascota
    @DeleteMapping("/{id}")
    public void deleteMascota(@PathVariable String id) {
        mascotaRepository.deleteById(id);
    }
}
