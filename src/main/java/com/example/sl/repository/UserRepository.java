package com.example.sl.repository;

import com.example.sl.models.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository  extends JpaRepository<User, Long> {
}

