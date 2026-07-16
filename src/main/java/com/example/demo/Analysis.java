package com.example.demo;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="analyses")

public class Analysis{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)

    private Long id;
    private String clientName;    
    private String inputText;      
    private String sentimentResult; 
    private LocalDateTime createdAt = LocalDateTime.now();

    public Analysis() {}


    public Analysis(String clientName, String inputText, String sentimentResult) {
        this.clientName = clientName;
        this.inputText = inputText;
        this.sentimentResult = sentimentResult;
    }

    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getInputText() { return inputText; }
    public void setInputText(String inputText) { this.inputText = inputText; }

    public String getSentimentResult() { return sentimentResult; }
    public void setSentimentResult(String sentimentResult) { this.sentimentResult = sentimentResult; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
