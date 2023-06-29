package com.example.sl.repository;

import com.example.sl.enums.RoleNames;
import com.example.sl.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRole(RoleNames roleClient);
}
