package com.southAfricaMobileNumbers.controller;

import com.southAfricaMobileNumbers.model.Number;
import com.southAfricaMobileNumbers.repositoriy.NumbersRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(value = "*")
@RequestMapping("/v1/api/numbers")
public class NumbersController {

    private final NumbersRepository numbersRepository;

    public NumbersController(NumbersRepository numbersRepository) {
        this.numbersRepository = numbersRepository;
    }

    /**
     * @param numbers list of numbers to add in db table
     * @return all numbers added correctly in db
     */
    @PostMapping
    public ResponseEntity<List<Number>> addNumbers(@RequestBody List<Number> numbers) {
        return ResponseEntity.ok(numbersRepository.saveAll(numbers));
    }

    /**
     * @return all numbers in db table
     */
    @GetMapping
    public ResponseEntity<List<Number>> getAllNumbers() {
        return ResponseEntity.ok(numbersRepository.findAll());
    }

    /**
     * @return all numbers in db were changed before save
     */
    @GetMapping(value = "fixed")
    public ResponseEntity<List<Number>> getAllFixedNumber() {
        return ResponseEntity.ok(numbersRepository.findAllByPreviousNotNull());
    }
}
