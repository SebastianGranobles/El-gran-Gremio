package com.elgrangremio.gremioproyect.repository;

import com.elgrangremio.gremioproyect.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepository extends MongoRepository<Admin, String> {
}
