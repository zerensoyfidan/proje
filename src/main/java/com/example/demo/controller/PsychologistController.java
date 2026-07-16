package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/psychologist")
public class PsychologistController {

    @GetMapping("/clients")
    public List<String> getClients() {
        return List.of(
            "Danışan Ahmet Yılmaz (ID: 1)",
            "Danışan Ayşe Demir (ID: 2)",
            "Danışan Mehmet Can (ID: 3)"
        );
    }

    @GetMapping("/clients/{id}/history")
    public String getClientHistory(@PathVariable Long id) {
        return "ID'si " + id + " olan danışanın geçmiş günlükleri ve yapay zeka duygu analiz özetleri başarıyla getirildi";
    }
}