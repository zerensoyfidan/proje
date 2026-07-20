package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notes")

public class NoteController{

    @PostMapping
    public String saveNote(){
        return "Günlüğünüz veri tabanına kaydedildi ve yapay zeka analizi tetiklendi";
    }

    @GetMapping("/my-notes")
    public List<String> getMyNotes(){
        return List.of(
          "16 Temmuz"
        );
    }
}