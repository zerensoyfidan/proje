package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.User;
import com.example.demo.UserRepository;
import com.example.demo.requests.LoginRequest;
import com.example.demo.requests.RegisterRequest;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Bu e-posta adresi zaten kullanımda");
        }

        User user = new User(
            request.getFullName(), request.getEmail(), request.getPassword(), request.getRole()
        );
        
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

@PostMapping("/login")
public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
    Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

    if (userOptional.isEmpty()) {
        return ResponseEntity.badRequest().body("E-posta adresi veya şifre hatalı.");
    }

    User user = userOptional.get();

    if (!loginRequest.getPassword().equals(user.getPassword())) {
        return ResponseEntity.badRequest().body("E-posta adresi veya şifre hatalı.");
    }

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Giriş başarılı");
    response.put("email", user.getEmail());
    response.put("role", user.getRole() != null ? user.getRole().name() : "DANISAN");

    return ResponseEntity.ok(response);
}
}