package com.southAfricaMobileNumbers.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity(name = "numbers")
public class Number {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long number;
    private String previous;

}
