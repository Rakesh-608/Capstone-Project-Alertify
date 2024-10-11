package com.example.user_management.controller;

import com.example.user_management.converter.Converter;
import com.example.user_management.domain.Incident;
import com.example.user_management.dto.IncidentDto;
import com.example.user_management.repository.IncidentRepository;
import com.example.user_management.service.IncidentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/incidents")
@CrossOrigin(origins = "http://localhost:4200")
public class IncidentController {

    private final IncidentService incidentService;
    private final IncidentRepository incidentRepository;
    private final Converter converter;

    public IncidentController(IncidentService incidentService, IncidentRepository incidentRepository, Converter converter) {
        this.incidentService = incidentService;
        this.incidentRepository = incidentRepository;
        this.converter = converter;
    }

    @GetMapping
    public ResponseEntity<?> getAllIncidents(){
        List<IncidentDto> incidents = new ArrayList<>();
        for(Incident incident: incidentService.getAllIncidents()) {
            incidents.add(converter.convertToIncidentDto(incident));
        }
        return ResponseEntity.ok(incidents);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getIncidentById(@PathVariable String id){
        log.info("Incident id: {}", id);
        IncidentDto  incidentDto = converter.convertToIncidentDto(incidentService.getIncidentById(id));
        log.info("Incident: {}", incidentDto);
        return ResponseEntity.ok(incidentDto);
    }

    @PostMapping
    public ResponseEntity<?> createIncident(@RequestBody IncidentDto incidentDto){
        log.info("Incident: {}", incidentDto);
//        return ResponseEntity.ok(incidentService.createIncident(converter.convertToIncident(incidentDto)));
        Incident incident = new Incident();
        incident.setId(incidentDto.id());
        incident.setUserId(incidentDto.userId());
        incident.setLocation(incidentDto.location());
        incident.setTime(incidentDto.time());
        incident.setDescription(incidentDto.description());
        incident.setIncidentType(incidentDto.incidentType());
        incident.setReviewStatus(incidentDto.reviewStatus()); // Correctly map boolean value
        incident.setDateOfPosted(incidentDto.dateOfPosted());

        return ResponseEntity.ok(incidentRepository.save(incident));
        }
}
