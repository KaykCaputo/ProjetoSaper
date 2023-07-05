package com.example.sl.models;

import com.example.sl.enums.RoleNames;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;

import java.util.Set;

@Entity
public class Role implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @Enumerated(EnumType.STRING)
    RoleNames role;

    @ManyToMany(mappedBy = "roles")
    Set<Users> users;

    @Override
    public String getAuthority() {
        return role.toString();
    }
}
