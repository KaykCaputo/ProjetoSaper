package com.example.sl.repository;

import com.example.sl.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAllByNameContaining(String name);

    static Optional<User> findByLogin(String username) {
        Object _User = Optional.of(username);
        return (Optional<User>) _User;
    }
}
