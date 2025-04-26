package com.elgrangremio.gremioproyect.repository;

import com.elgrangremio.gremioproyect.model.Mascota;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MascotaRepository extends MongoRepository<Mascota, String> {
}
