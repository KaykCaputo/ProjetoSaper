package com.example.sl.repository;

import com.example.sl.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long> {

    List<Users> findAllByUsernameContaining(String name);

    Optional<Users> findByUsername(String username);
}
