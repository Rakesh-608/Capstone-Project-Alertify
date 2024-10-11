package com.example.user_management.converter;

import com.example.user_management.domain.Incident;
import com.example.user_management.domain.Person;
import com.example.user_management.dto.IncidentDto;
import com.example.user_management.dto.PersonDto;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Component
public class Converter {

    public static Person convertToPerson(PersonDto personDto) {
        LocalDateTime localDateTime = LocalDateTime.now(); // Replace with your LocalDateTime
        LocalDate localDate = localDateTime.toLocalDate();
        Person person= new Person();
        person.setId(personDto.id());
        person.setName(personDto.name());
        person.setRole(personDto.role());
        person.setEmail(personDto.email());
        person.setPassword(personDto.password());
        person.setPhone(personDto.phone());
        person.setAddress(personDto.address());
        person.setGender(personDto.gender());
        person.setAge(personDto.age());
        person.setEmergencyContact(personDto.emergencyContact());
        person.setRegisteredDate(LocalDateTime.from(localDateTime));

        return person;

    }


    public static PersonDto convertToPersonDto(Person person) {
        return new PersonDto(
                person.getId(),
                person.getName(),
                person.getRole(),
                person.getEmail(),
                person.getPassword(),
                person.getPhone(),
                person.getAddress(),
                person.getGender(),
                person.getAge(),
                person.getEmergencyContact()
        );
    }

    public static Incident convertToIncident(IncidentDto incidentDto) {
        LocalDateTime localDateTime = LocalDateTime.now(); // Replace with your LocalDateTime
        LocalDate localDate = localDateTime.toLocalDate();

        Incident incident= new Incident();
//        incident.setId(incidentDto.id());
//        incident.setUserId(incidentDto.userId());
//        incident.setIncidentType(incidentDto.incidentType());
//        incident.setDescription(incidentDto.description());
//        incident.setLocation(incidentDto.location());
//        incident.setDateOfPosted(incidentDto.dateOfPosted());
////                LocalDateTime.from(localDateTime));
////                LocalDateTime.from(Instant.now()));
//        incident.setTime(incidentDto.time());
//        incident.setReviewStatus(incidentDto.reviewStatus());
        incident.setId(incidentDto.id());
        incident.setUserId(incidentDto.userId());
        incident.setLocation(incidentDto.location());
        incident.setTime(incidentDto.time());
        incident.setDescription(incidentDto.description());
        incident.setIncidentType(incidentDto.incidentType());
        incident.setReviewStatus(incidentDto.reviewStatus()); // Correctly map boolean value
        incident.setDateOfPosted(incidentDto.dateOfPosted());
        return incident;

    }


    public static IncidentDto convertToIncidentDto(Incident incident) {
        return new IncidentDto(incident.getId(),
                incident.getUserId(),
                incident.getLocation(),
                incident.getTime(),
                incident.getDescription(),
                incident.getIncidentType(),
                incident.getReviewStatus(),
                incident.getDateOfPosted()
        );
    }

}
