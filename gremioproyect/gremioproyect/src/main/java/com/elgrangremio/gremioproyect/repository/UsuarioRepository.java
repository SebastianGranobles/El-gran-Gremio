package com.elgrangremio.gremioproyect.repository;

import com.elgrangremio.gremioproyect.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
}
