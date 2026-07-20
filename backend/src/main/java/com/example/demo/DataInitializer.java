package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final AnalysisRepository analysisRepository;

    public DataInitializer(AnalysisRepository analysisRepository) {
        this.analysisRepository = analysisRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        if (analysisRepository.count() == 0) {
            analysisRepository.save(new Analysis(
                "İsim", 
                "Günlük yazısı", 
                "Özet"
            ));

            analysisRepository.save(new Analysis(
                "İsim2", 
                "Günlük yazısı2", 
                "Özet2"
            ));

            analysisRepository.save(new Analysis(
                "İsim3", 
                "Günlük yazısı3", 
                "Özet3"
            ));

            System.out.println("Veriler eklendi");
        }
    }
}