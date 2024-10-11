package com.example.user_management.dto;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.Date;

public record IncidentDto(
        String id,
        @NotNull
        String userId,
        String location,
        String time,
        String description,
        String incidentType,
        String reviewStatus,
        String dateOfPosted
//        LocalDateTime dateOfPosted
) {}
